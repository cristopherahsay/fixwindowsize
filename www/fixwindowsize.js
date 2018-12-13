var exec = require('cordova/exec');

exports.resize = function (arg0, success, error) {
    exec(success, error, 'windowResize', 'uwp', [arg0]);
};