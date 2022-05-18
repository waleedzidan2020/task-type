"use strict";
exports.__esModule = true;
exports.Stack = void 0;
var Stack = /** @class */ (function () {
    function Stack(size) {
        this.arr = new Array(size);
        this.top = -1;
        this.length = size;
    }
    Stack.prototype.IsEmpty = function () {
        return this.top == -1;
    };
    Stack.prototype.IsFull = function () {
        return this.top == (this.length - 1);
    };
    Stack.prototype.push = function (value) {
        if (this.IsFull()) {
            console.log("stack over flow ");
            return -1;
        }
        else {
            this.arr[++(this.top)] = value;
        }
    };
    Stack.prototype.pop = function () {
        if (this.IsEmpty()) {
            console.log("stack is empty");
            return -1;
        }
        return this.arr[this.top--];
    };
    Stack.prototype.count = function () {
        return this.top;
    };
    Stack.prototype.size = function () {
        return this.length;
    };
    return Stack;
}());
exports.Stack = Stack;
