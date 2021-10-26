class WorkoutService {
    constructor(port){
        this.port = port
    }

    getWorkouts(){
        fetch(this.port + `/workouts`)
        .then(resp => resp.json())
        .then(data => console.log(data))
    }
}