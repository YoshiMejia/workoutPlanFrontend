class PlannerService {
    constructor(port){
        this.port = port
    }

    getPlanner(){
        fetch(this.port + `/planners`)
        .then(resp => resp.json())
        .then(data => {
            data.forEach(planner => {
                const newPlanner = new Planner(planner)
                newPlanner.addToDom()
            })
        })
        .catch(function(error) {
            alert("error");
            document.body.innerHTML = error.message;
          })
    }

    createPlanner(){
        const plannerName = document.getElementById("planner-name")
        const plannerObj = {
            planner: {
                name: plannerName.value
            }
        }
        const configObj = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify(plannerObj)
          }
        fetch(this.port + `/planners`, configObj)
        .then(resp => resp.json())
        .then(data => {
            const p = new Planner(data)
            p.addToDom()
        })
        .catch(function(error) {
            alert("error");
            document.body.innerHTML = error.message;
          })
     
    }

    addToPlanner(){
        const updatedPlanner = {
            planner: {
                workout_attributes: {
                name: workoutName.value,
                description: workoutDesc.value,
                sets: workoutSets.value,
                reps: workoutReps.value
            }}
        }
        const configObj = {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify(updatedPlanner)
          }
        fetch(this.port + `/planners/${plannerSelect.value}`, configObj)
        .then(resp => resp.json())
        .then(data => {
            const matchP = Planner.all.find(p => p.name === data.name)
            //Find matching planner obj instead of overwriting
            const lastElement =  data.workouts.slice(-1)
            //grab the last workout from planners workouts array & make new workout obj w it
            const newW = new Workout(lastElement[0])
            newW.addToDOM() 
            matchP.workouts.push(newW)
            matchP.addToDom()
            console.log(data);
            
        })
    }

}//class ender