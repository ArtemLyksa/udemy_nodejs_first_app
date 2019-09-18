function sayHello(name) {
    console.log('Hello ' + name);
}

var area = function(x, y) {
    console.log(x * y);
};

sayHello('Artem');
area(2, 3);

//Module
const logger = require('./logger');
// logger.log('Logger module is loaded in the app module');
logger('message')