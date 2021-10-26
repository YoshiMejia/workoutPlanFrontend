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
                planner_id: plannerId.value
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
            w.addToDOM()
        })
    }

}