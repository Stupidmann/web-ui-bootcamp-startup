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

class Movie extends EventEmiter{

    constructor (title,year,duration) {
        super();
        this.title = title;
        this.year = year;
        this.duration = duration;
    }
    play() {
        this.on(console.log("playing... " + this.title));
    }
    pause() {
        this.on(console.log("pausing... " + this.title));
    }
    resume() {
        this.on(console.log("resuming... " + this.title));
    }
}

class Actor {
    constructor (name,age) {
        this.name = name;
        this.age = age;
    }
}

let movie1 = new Movie("Batman","2006","123 m.");
movie1.play();
movie1.pause();
movie1.resume();

