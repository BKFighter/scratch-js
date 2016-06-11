var exports = module.exports = {};
const vm = require("vm");
const process = require("process");
var time = require("time");
var int = 1234;

var monthNames = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

exports.yearsSince1900 = function() { return time.localtime(Date.now()/1000).year; };
exports.year           = function() { return time.localtime(Date.now()/1000).year+1900; };
exports.monthName      = function() { return monthNames[time.localtime(Date.now()/1000).month]; };
exports.month          = function() { return time.localtime(Date.now()/1000).month; };
exports.day            = function() { return time.localtime(Date.now()/1000).dayOfMonth; };
exports.hour           = function() { return time.localtime(Date.now()/1000).hours; };
exports.minute         = function() { return time.localtime(Date.now()/1000).minutes; };
exports.second         = function() { return time.localtime(Date.now()/1000).seconds; };
exports.timezone       = function() { return time.localtime(Date.now()/1000).timezone; };
exports.pi             = Math.PI;

exports.repeat = function(times, callback) {
    for (var i = 0; i < times; i++) {
        callback();
    }
};

exports.join = function(jointhis, andthis) {
    return jointhis + andthis;
};

exports.sqrt = function(number) {
    if (typeof number == typeof int) {
        return Math.sqrt(number);
    }
};

exports.sin = function(number) {
    if (typeof number == typeof int) {
        return Math.sin(number);
    }
};

exports.cos = function(number) {
    if (typeof number == typeof int) {
        return Math.cos(number);
    }
};

exports.tan = function(number) {
    if (typeof number == typeof int) {
        return Math.tan(number);
    }
};

exports.random = function(lowest, highest) {
    return Math.ceil(Math.random() * (highest - lowest + 1) + lowest - 1);
};

exports.round = function(number, type) {
    if (type==null){return Math.round(number);}
    if (type=='ceiling'){return Math.ceil(number);}
    if (type=='floor'){return Math.floor(number);}
};

exports.abs = function(number) {
    return Math.abs(number);
}

exports.letterOf = function(string, at){
    string.toString();//Just in case it only works with strings.
    return string.charAt(at);
}
