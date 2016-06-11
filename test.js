var scratch = require("./scratch-js.js");

scratch.repeat(3, function() {
    console.log(scratch.join('The time is ', scratch.hour() + ':' + scratch.minute()));
    //=> The time is 12:34
});