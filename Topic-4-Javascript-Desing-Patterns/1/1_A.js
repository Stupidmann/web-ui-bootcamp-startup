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

    }
    on (eventName , callback) {
        let event = eventName;
        callback ({
            //does something
        });
    }
    emit (eventName) {
        eventName();
    }
    off (eventName , callback) {
        //
    }
}

let movie1 = new Movie;
movie1.title = "Madagascar";
movie1.play();

movie1.year = "2005";
console.log(movie1.title + " " + movie1.year);