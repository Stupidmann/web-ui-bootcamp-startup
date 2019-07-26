//RENAME FILE BEFORE COMMIT
class Movie {

    constructor (title,year,duration) {
        this.title = title;
        this.year = year;
        this.duration = duration;
    }
    play() {
        console.log("playing...");
    }
    pause() {
        console.log("pausing...");
    }
    resume() {
        console.log("resuming...");
    }
}

class Actor {
    constructor (name,age) {
        this.name = name;
        this.age = age;
    }
}

class EventEmiter {
    constructor () {
        this.events = {};
    }
    on (eventName , callback) {
        if ( this.events[eventName]) {
            this.events[eventName].push(callback);
        } else {
            this.events[eventName] = [callback];
        }        
    }
    emit (eventName) {
        this.events[eventName].forEach(callback =>
            callback());       
    }
    off (eventName , callback) {
        let newEvents = this.events[eventName].filter(c => c !== callback);
        this.events[eventName] = newEvents;
    }
    
}
const logHola = function () {
    console.log("holasas");
}
let test = new EventEmiter;

test.on("hola",logHola);

test.off("hola",logHola);

test.emit("hola");

let movie1 = new Movie;
movie1.title = "Madagascar";
movie1.play();

movie1.year = "2005";
console.log(movie1.title + " " + movie1.year);
