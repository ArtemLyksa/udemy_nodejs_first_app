const Logger = require('./logger');
const logger = new Logger();
const event = 'messageLogged';

//Listen to an event
logger.on(event, (eventArg) => {
    console.log(`Received event with name "${eventArg.name}"`);
});

logger.log('Message');