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
        this.emit("play");
    }
    pause() {
        this.emit("pause");
    }
    resume() {
        this.emit("resume");
    }
}

class Actor {
    constructor (name,age) {
        this.name = name;
        this.age = age;
    }
}

