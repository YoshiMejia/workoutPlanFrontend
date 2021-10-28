class WorkoutService {
    constructor(port){
        this.port = port
    }

    getWorkouts(){
        fetch(this.port + `/workouts`)
        .then(resp => resp.json())
        .then(data => {
            for(const workout of data){
                let newWorkout = new Workout(workout)
                newWorkout.addToDOM()
            }
        })
    }
    
    createWorkout(){
        const workoutObj = {
            workout: {
                name: workoutName.value,
                description: workoutDesc.value,
                sets: workoutSets.value,
                reps: workoutReps.value,
                planner_attributes: {
                    name: plannerName.value,
                    id: plannerSelect.value
                }
            }
        }
        const configObj = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify(workoutObj)
          }
        fetch(this.port + `/workouts`, configObj)
        .then(resp => resp.json())
        .then(data => {
            const w = new Workout(data)
            const pID = w.planner_id
            const pName = plannerName.value
            const newP = {
                id: pID,
                name: pName,
                workouts: [
                    w
                ]}
            const p = new Planner(newP)
            p.addToDom()
            w.addToDOM()
        })
        .catch(function(error) {
            alert("error");
            document.body.innerHTML = error.message;
          })
     
    }

    updateWorkout(workout){
        const configObj = {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify(workout)
          }
        fetch(this.port + `/workouts/${workout.id}`, configObj)
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
        })
    }

}