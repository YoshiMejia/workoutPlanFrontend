const port = `http://127.0.0.1:3000`;
const workoutData = new WorkoutService(port); // create Workout object so that i can getWorkouts w parsed data (below)
const plannerData = new PlannerService(port); // create Planner object so that i can getPlanners w parsed data (below)
// const workoutButton = document.getElementById("new-workout")
// const plannerButton = document.getElementById("new-planner")
const newButtons = document.getElementById("new-buttons")
const workoutForm = document.getElementById("workout-form")
const workoutName = document.getElementById("workout-name")
const workoutDesc = document.getElementById("workout-desc")
const workoutReps = document.getElementById("workout-reps")
const workoutSets = document.getElementById("workout-sets")
const plannerName = document.getElementById("planner-name")
const graveyard = document.getElementById("graveyard")


workoutForm.addEventListener('submit', handleSubmit) // need to change to handle each separate submit button
newButtons.addEventListener('click', handleClick)

  
// if Planner.all is empty, 
function newWorkoutForm(){
    workoutForm.innerHTML = `
    <form id="workout-form">
        <label for="workout-name">Workout Name:</label>
        <input type="text" name="name" id="workout-name">
        <br>
        <label for="workout-desc">Workout Description:</label>
        <input type="text" name="description" id="workout-desc">
        <br>
        <label for="workout-reps">How many reps?</label>
        <input type="number" name="reps" id="workout-reps" min="1" max="30" value="1">
        <br>
        <label for="workout-sets">How many sets?</label>
        <input type="number" name="sets" id="workout-sets"min="1" max="5" value="1">
        <br>
        <label for="planner_select">Select an existing planner:</label>
        <select name="planner_id" id="planner_select">
        <option hidden selected value> - select one - </option>
        </select>
        <br>
        <input type="submit" value="Add Workout" id="workout-submit">    
    </form>
    `
}
// function newWorkoutForm(){ //--UNTOUCHED
//     workoutForm.innerHTML = `
//     <form id="workout-form">
//         <label for="workout-name">Workout Name:</label>
//         <input type="text" name="name" id="workout-name">
//         <br>
//         <label for="workout-desc">Workout Description:</label>
//         <input type="text" name="description" id="workout-desc">
//         <br>
//         <label for="workout-reps">How many reps?</label>
//         <input type="number" name="reps" id="workout-reps" min="1" max="30" value="1">
//         <br>
//         <label for="workout-sets">How many sets?</label>
//         <input type="number" name="sets" id="workout-sets"min="1" max="5" value="1">
//         <br>
//         <label for="planner_select">Select an existing planner:</label>
//         <select name="planner_id" id="planner_select">
//         <option hidden selected value> - select one - </option>
//         </select>
//         <br>
//         <input type="submit" value="Add Workout" id="workout-submit">    
//     </form>
//     `
// }

function newPlannerForm(){
    workoutForm.innerHTML = `
    <form id="planner-form">
        <label for="workout-name">Planner Name:</label>
        <input type="text" name="name" id="planner-name" placeholder="cardio day">
        <br>
        <input type="submit" value="Add Planner" id="planner-submit">    
    </form>
    `
}

function handleClick(e){
    if (e.target.innerText === "Create new Workout"){
        newWorkoutForm()
    } else if (e.target.innerText === "Create new Planner"){
        newPlannerForm()
    }
}

// e.target is for the whole form. i have to separate the submit target to handle
// each separate submit button. then i have to ensure i can create new planner objects
//and that theyre persisting to the DB.
// i should double check handleClick, make a function for the workout form to be displayed, make sure forms go away once theyre submitted
function handleSubmit(e){
    e.preventDefault()
    if(e.submitter.value === "Add Planner"){
        console.log('add planner')
        plannerData.createPlanner()
    }else if(e.submitter.value === "Add Workout"){
        console.log('add workout')
        workoutData.createWorkout()
    }
}

plannerData.getPlanner()
workoutData.getWorkouts() // retreive parsed json data of all workouts from backend
//(6) [{…}, {…}, {…}, {…}, {…}, {…}]
// 0: {id: 1, name: 'pushups', description: 'hands on floor, push', sets: 3, reps: 10, …}
// 1: {id: 2, name: 'jumping jacks', description: 'jump and wave arms around', sets: 3, reps: 20, …}
// 2: {id: 3, name: 'jog', description: 'run for 10 minutes', sets: 3, reps: 1, …}
// 3: {id: 4, name: 'crunches', description: 'lay on back and bring knees to chest', sets: 3, reps: 15, …}
// 4: {id: 5, name: 'abdominal extensions', description: 'lay on back, knees to chest and then push them back out', sets: 3, reps: 15, …}
// 5: {id: 6, name: 'romanian deadlift', description: 'bend over and pick up barbel', sets: 4, reps: 8, …}
// length: 6
// [[Prototype]]: Array(0)

