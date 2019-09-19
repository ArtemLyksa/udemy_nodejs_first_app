const EventsEmitter = require('events');
const emitter = new EventsEmitter;

const event = 'messageLogged';
emitter.on(event, function(){
    console.log('Event received');
})

emitter.emit(event);