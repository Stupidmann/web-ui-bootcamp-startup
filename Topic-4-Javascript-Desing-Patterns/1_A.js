class Movie {
    constructor (title,year,duration){
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


