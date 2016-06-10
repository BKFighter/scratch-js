var scratch = require("./scratch-js.js");

scratch.repeat(3, function() {
    console.log('The time is ' + scratch.hour() + ':' + scratch.minute());
});