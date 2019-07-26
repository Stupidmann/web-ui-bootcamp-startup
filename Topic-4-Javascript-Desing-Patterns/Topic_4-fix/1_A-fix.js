class Movie {

    constructor (title,year,duration) {
        this.title = title;
        this.year = year;
        this.duration = duration;
    }
    play() {
        console.log("playing... " + this.title);
    }
    pause() {
        console.log("pausing... " + this.title);
    }
    resume() {
        console.log("resuming... " + this.title);
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
    console.log("emit works");
}
let test = new EventEmiter;

test.on("emit",logHola);

test.emit("emit");

test.off("emit",logHola);

let movie1 = new Movie("Madagascar",2005);
movie1.play();