class Workout {
    static all = []
    static workoutView = document.getElementById("workout-view")

    constructor({id, name, description, sets, reps, completed, planner_id}){
        this.id = id
        this.name = name
        this.description = description
        this.sets = sets
        this.reps = reps 
        this.completed = completed
        this.planner_id = planner_id
        this.element = document.createElement('div')
        this.element.className = `workout-${name}-${id}` 
        Workout.all.push(this)
    }

    render(){
        this.element.innerHTML = `
        <div data-id="${this.id}">
        <h3>${this.name}</h3>
            <p>Description: ${this.description}</p>
            <li class ="sets"> Sets: ${this.sets}</li>
            <li class="reps"> Reps: ${this.reps}</li>
            <li class="compl"> Completed: ${this.completed}</li>
        </div>
        `
        return this.element
    }

    addToDOM(){
        Workout.workoutView.appendChild(this.render())
    }
}