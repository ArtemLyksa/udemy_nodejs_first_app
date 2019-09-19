//Path module
const path = require('path');
var pathObj = path.parse(__filename);

console.log(pathObj);

//OS module
const os = require('os');
var totalMemory = os.totalmem();
var freeMemory = os.freemem()

//Template string
//ES6 / ES2015 : ECMAScript 6
console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);

//Filesystem module
const fs = require('fs');
// const files = fs.readdirSync('./');
// console.log(files);

//Async
var callback = function(error, files) {
    if (error) console.log('Error', error);
    else console.log(files);
}

fs.readdir('./', callback);