class EventArg {
    constructor(name) {
        this.name = name;
    }
}

const EventsEmitter = require('events');
const emitter = new EventsEmitter;
const event = 'messageLogged';
const eventArg = new EventArg("Ford");

//Listen to an event
emitter.on(event, (eventArg) => {
    console.log(`Received event with name "${eventArg.name}"`);
})
//Raise an event
emitter.emit(event, eventArg);