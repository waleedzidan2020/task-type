"use strict";
exports.__esModule = true;
exports.Rectangle = void 0;
var Rectangle = /** @class */ (function () {
    function Rectangle(hight, width) {
        this.hight = hight;
        this.width = width;
    }
    Rectangle.prototype.CalcCircumference = function () {
        var cal = (this.hight + this.width) * 2;
        return cal;
    };
    Rectangle.WhoAmI = function () {
        return "im rectangle";
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
