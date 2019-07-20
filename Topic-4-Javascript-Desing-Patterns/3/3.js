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
            callback(`The ${eventName} has been emited`));
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
        this.cast = [];
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
    addCast(cast) {
        this.cast = cast;
        console.log("cast added " + this.cast.name);
        
        for (let i=0; i<cast.length; i++) {
            this.cast = cast;
            console.log("cast added " + this.cast[i].name);
        }
    }

}

class Actor {
    constructor (name,age) {
        this.name = name;
        this.age = age;
    }
}

class Logger {
    constructor () {

    }
    log (info) {
        console.log(info);
    }
}

const terminator = new Movie('Terminator I', 1985, 60);

let log1 = new Logger();

terminator.on("play",log1.log);
terminator.play();
