const EventsEmitter = require('events');
const event = 'messageLogged';
var url = 'http://mylogger.io/log';

class EventArg {
    constructor(name) {
        this.name = name;
    }
}

class Logger extends EventsEmitter {
    log(message) {
        //Send HTTP request
        // console.log(message);

        //Raise an event
        var eventArg = new EventArg(message);
        this.emit(event, eventArg);
    }
}

module.exports = Logger;
