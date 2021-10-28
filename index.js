const port = `http://127.0.0.1:3000`;
const workoutData = new WorkoutService(port); // create Workout object so that i can getWorkouts w parsed data (below)
const plannerData = new PlannerService(port); // create Planner object so that i can getPlanners w parsed data (below)
const newButtons = document.getElementById("new-buttons")
const workoutForm = document.getElementById("workout-form")
const plannerForm = document.getElementById("planner-form")
const workoutName = document.getElementById("workout-name")
const workoutDesc = document.getElementById("workout-desc")
const workoutReps = document.getElementById("workout-reps")
const workoutSets = document.getElementById("workout-sets")
const plannerName = document.getElementById("planner_name")
const plannerSelect = document.getElementById("planner_select")
const graveyard = document.getElementById("graveyard")


workoutForm.addEventListener('submit', handleSubmit) 

function handleSubmit(e){
    e.preventDefault()
    if(e.submitter.value === "Add Workout"){
        console.log('add workout')
        workoutData.createWorkout()
    } else if(e.submitter.value === "Add To Planner"){
        console.log('add to planner')
            plannerData.addToPlanner()
    }
}

plannerData.getPlanner()
workoutData.getWorkouts() 