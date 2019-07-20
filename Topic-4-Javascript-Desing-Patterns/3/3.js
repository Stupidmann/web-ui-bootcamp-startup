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
        this.cast = [];
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

const terminator = new Movie('Terminator I', 1985, 60);
const arnold = new Actor('Arnold Schwarzenegger', 50);
const otherCast = [
  new Actor('Paul Winfield', 50),
  new Actor('Michael Biehn', 50),
  new Actor('Linda Hamilton', 50)
];

terminator.addCast(arnold);
terminator.addCast(otherCast);