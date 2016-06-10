var exports = module.exports = {};
const vm = require("vm");
const process = require("process");
var time = require("time");

var monthNames = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

exports.yearsSince1900 = time.localtime(Date.now()/1000).year;
exports.year           = time.localtime(Date.now()/1000).year+1900;
exports.monthName      = monthNames[time.localtime(Date.now()/1000).month];
exports.month          = time.localtime(Date.now()/1000).month;
exports.day            = time.localtime(Date.now()/1000).dayOfMonth;
exports.hour           = time.localtime(Date.now()/1000).hours;
exports.minute         = time.localtime(Date.now()/1000).minutes;
exports.second         = time.localtime(Date.now()/1000).seconds;
exports.timezone       = time.localtime(Date.now()/1000).timezone;


exports.repeat = function(times, callback) {
    for (var i = 0; i < times; i++) {
        callback();
    }
};

exports.repeatUntil = function(happens, callback) {
    while (!happens()) {
        callback();
    }
};

exports.wait = function(secs) {
    setTimeout(process.stdin.resume, secs * 1000);
    process.stdin.pause();
};
