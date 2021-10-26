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
                newPlanner.addToSelect()
                // newPlanner.addToDom()
            })
        })
        .catch(function(error){
            console.log(error);
        })
    }
}