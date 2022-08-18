// npm install moment --save
// node index.js para executar
const moment = require('moment');

function sayHello(name) {
 console.log(`Hello ${name}`);
 console.log(moment().format('YYYY-MM-DD HH:mm:ss'));
}

sayHello('John');