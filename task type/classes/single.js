"use strict";
exports.__esModule = true;
exports.single = void 0;
var single = /** @class */ (function () {
    function single() {
    }
    single.createone = function () {
        return single.s;
    };
    single.prototype.display = function () {
        console.log("one");
    };
    single.s = new single();
    return single;
}());
exports.single = single;
