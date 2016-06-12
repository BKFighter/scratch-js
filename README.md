# scratch-js
scratch-js is a Node Module that simplifies Node.js.

# About
scratch-js is a Node module for Scratchers making the switch.

# Install
Install using npm
```
npm install scratch-js
```

# Usage
You can use scratch-js to access basic APIs, simplify functions, and more. But first you have to load the module.
Here's a basic script using scratch-js.
```
var scratch = require("scratch-js")

scratch.repeat(3, function() {
    console.log('Welcome to the month of ' + scratch.monthName());
});
```
