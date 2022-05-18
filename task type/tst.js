"use strict";
// let fullname: string = "waleed"
// let lastname: string = "abdullah"
// let count: number = 22;
// let c: number = 23
// console.log(c, count, fullname, lastname)
exports.__esModule = true;
// let fn: Function = () => console.log("hi")
// class student {
//     name: string;
//     id: number;
//     email: string;
//     constructor(name: string, id: number, email: string) {
//         this.name = name;
//         this.id = id;
//         this.email = email
//     }
// }
// import { IPerson } from "./interfaces/interfaces";
// // let s1: student = new student("wakeed",1,"mohamed@gmail.com")
// // console.log(s1.email)
// // console.log(s1.id)
// // console.log(s1.name)
// // let r :any = "ww";
// // console.log(r)
// // let x : number|boolean;
// // x=55
// // x=true
// // console.log(x)
// // function display ():number{
// //  return 5
// // }
// // function d <T>(ars:T): T{
// // let c : T[] ;
// // return ars;
// // }
// // let a = d (55)
// enum color {
//     red,
//     green = "g",
//     blue = "b"
// }
// let y: color = color.green
// let arr: number = 6
// console.log(y)
// class Sum implements IPerson {
//     value1: number;
//     value2: number;
//     constructor(value1: number, value2: number) {
//         this.value1 = value1;
//         this.value2 = value2
//     }
//     display() {
//         return `${this.value1} , ${this.value2}`
//     }
//     sum() {
//         let s: number = this.value1 + this.value2
//         return s;
//     }
// }
// let SUM : IPerson =new Sum(10,20)
// console.log(SUM.display())
// console.log(SUM.sum())
var queue_1 = require("./classes/queue");
var Rectangle_1 = require("./classes/Rectangle");
var single_1 = require("./classes/single");
var square_1 = require("./classes/square");
var Stack_1 = require("./classes/Stack");
var r1 = new Rectangle_1.Rectangle(10, 20);
console.log(r1.CalcCircumference());
var s2 = new square_1.square(20);
console.log(s2.CalcCircumference());
console.log(square_1.square.WhoAmI());
var s1 = new square_1.square(10); //polymorphism accept gg
console.log(s1.CalcCircumference()); //override this function from square class but this object face as rectangle 
console.log(Rectangle_1.Rectangle.WhoAmI());
var s = single_1.single.createone();
s.display();
var st = new Stack_1.Stack(4);
st.push(1);
st.push(20);
st.push(5);
st.push(100);
console.log(st.count());
var q = new queue_1.Queue(1);
q.enqueue(1);
q.enqueue(2); // queue is full 
//let x = new single()  error just one object
