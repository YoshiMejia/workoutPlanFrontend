class Planner {
    static all = []
    static plannerView = document.getElementById("planner-view")

    constructor({id, name, workouts}){
        this.name = name
        this.id = id
        this.workouts = workouts
        this.element = document.createElement('div')
        this.element.className = `planner-${name}-${id}`
        Planner.all.push(this)
    }

    addToSelect(){
        const opt = document.createElement('option')
        opt.value = this.id
        opt.innerText = this.name
        plannerId.appendChild(opt)
    }

    //need to add workouts to the render
    // render(){
    //     this.element.innerHTML = `
    //     <div data-id="${this.id}">
    //         <h3>${this.name}</h3>
    //         <p>${this.workouts}</p>
    //     </div>
    //     `
    //     return this.element
    // }

    // just in case
    // addToDom(){
    //     Planner.plannerView.appendChild(this.render())
    // }
    
}