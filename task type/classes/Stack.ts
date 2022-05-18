export class Stack {

    private arr: number[];
    private top: number;
    private length: number;

    constructor(size: number) {

        this.arr = new Array(size)
        this.top = -1
        this.length = size
    }
    private IsEmpty() {
        return this.top == -1
    }
   private IsFull() {
        return this.top == (this.length - 1)
    }

    push(value: number) {
        if (this.IsFull()) {
            console.log("stack over flow ")
            return -1
        } else {
            this.arr[++(this.top)] = value
        }


    }

    pop() {
        if (this.IsEmpty()) {
            console.log("stack is empty")
            return -1
        }

        return this.arr[this.top--]
    }

    count() {
        return this.top;
    }
    size() {
        return this.length;
    }






}