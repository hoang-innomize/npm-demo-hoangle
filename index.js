const sayHello = require('./libs/say-hello');

function helloWorld(name) {
    return sayHello(name);
}
module.exports = helloWorld;
