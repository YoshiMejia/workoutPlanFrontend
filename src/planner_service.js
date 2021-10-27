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

    createPlanner(){
        const plannerObj = {
            planner: {
                name: document.getElementById("planner-name").value
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



}//class ender