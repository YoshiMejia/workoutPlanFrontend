class Planner {
    static all = []
    static plannerView = document.getElementById("planner-view")

    constructor({id, name, workouts}){
        this.id = id
        this.name = name
        this.workouts = workouts
        this.element = document.createElement('div')
        this.element.className = `planner-${name}-${id}`
        this.addToSelect()
        Planner.all.push(this)
    }

    addToSelect(){ 
        const opt = document.createElement('option')
        const plannerId = document.getElementById("planner_select")
        opt.value = this.id
        opt.innerText = this.name
        plannerId.appendChild(opt)
    }

    render(){
        this.element.innerHTML = `
        <div data-id="${this.id}">
            <h3>Planner name: ${this.name}</h3>
            <p>Workouts in plan: ${this.workouts.map(w => w.name )}</p>
        </div>
        `
        return this.element
    }
    
    addToDom(){
        Planner.plannerView.appendChild(this.render())
    }
    
}