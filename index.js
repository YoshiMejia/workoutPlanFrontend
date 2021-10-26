const port = `http://127.0.0.1:3000`;

const workout = new WorkoutService(port);
workout.getWorkouts() // retreive parsed json data of all workouts from backend
//(6) [{…}, {…}, {…}, {…}, {…}, {…}]
// 0: {id: 1, name: 'pushups', description: 'hands on floor, push', sets: 3, reps: 10, …}
// 1: {id: 2, name: 'jumping jacks', description: 'jump and wave arms around', sets: 3, reps: 20, …}
// 2: {id: 3, name: 'jog', description: 'run for 10 minutes', sets: 3, reps: 1, …}
// 3: {id: 4, name: 'crunches', description: 'lay on back and bring knees to chest', sets: 3, reps: 15, …}
// 4: {id: 5, name: 'abdominal extensions', description: 'lay on back, knees to chest and then push them back out', sets: 3, reps: 15, …}
// 5: {id: 6, name: 'romanian deadlift', description: 'bend over and pick up barbel', sets: 4, reps: 8, …}
// length: 6
// [[Prototype]]: Array(0)