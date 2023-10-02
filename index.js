const user = require('./information.js');

console.log(user.name)

let cowsay = require('cowsay')

console.log(cowsay.say({
    text : "Hello my name is " + user.name + " from " + user.campus,
    e : "oO",
    T : "U "
}));