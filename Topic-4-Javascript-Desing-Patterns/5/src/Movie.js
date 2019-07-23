class Movie extends EventEmiter {

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

export default Movie;