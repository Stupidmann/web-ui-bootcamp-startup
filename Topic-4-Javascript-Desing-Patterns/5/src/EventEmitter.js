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

export default EventEmiter;