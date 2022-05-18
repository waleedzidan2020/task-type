"use strict";
exports.__esModule = true;
exports.Queue = void 0;
var Queue = /** @class */ (function () {
    function Queue(size) {
        this.arr = new Array(size);
        this.front = -1;
        this.back = -1;
        this.lenght = size;
    }
    Queue.prototype.isempty = function () {
        return this.front == -1;
    };
    Queue.prototype.IsFull = function () {
        return this.front == 0 && this.back == this.lenght - 1;
    };
    Queue.prototype.enqueue = function (value) {
        if (this.IsFull()) {
            console.log("queue is full");
            return;
        }
        if (this.front == -1) {
            this.front = 0;
            this.back++;
            this.arr[this.back] = value;
        }
    };
    Queue.prototype.dequeue = function () {
        var e;
        if (this.isempty()) {
            console.log("queue is empty");
            return;
        }
        else {
            e = this.arr[this.front];
            if (this.front >= this.back) {
                this.front = -1;
                this.back = -1;
            }
            else {
                this.front++;
            }
        }
        return e;
    };
    return Queue;
}());
exports.Queue = Queue;
