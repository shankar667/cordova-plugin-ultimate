/*global cordova, module*/

module.exports = {
    ping: function (name, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "Ultimate", "named", [name]);
    }
};
