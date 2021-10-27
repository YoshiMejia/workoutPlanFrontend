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
        this.element.addEventListener('click', this.handleClick)
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
            <button class="add_comp_reps">+</button>
        `
        return this.element
    }
    totalReps() {
        return this.sets * this.reps
    }
    
    completedWorkout(){
        graveyard.innerHTML = `<h3>You crushed it, heres your workout graveyard!</h3>`
        graveyard.appendChild(this.render())
        const buffSponge = document.getElementById("buff_sponge")
        setTimeout(function(){buffSponge.remove()}, 2000)
    }
   
    newData(){
        workoutData.updateWorkout(this)
    }

    increaseCompleted(){
        const total = this.totalReps()
        if (this.completed < total)    
            {this.completed += this.reps
                this.render()
                this.newData()}
            else if (this.completed >= total ) {
               this.element.outerHTML = `<div id="buff_sponge"><img src="images/buff-spongebob.gif"></div>`
                this.completedWorkout()
            }
    }

    handleClick = (e) => {
        if(e.target.innerText === "+"){
            this.increaseCompleted()
        }
    }

    addToDOM(){
        Workout.workoutView.appendChild(this.render())
    }

   
}