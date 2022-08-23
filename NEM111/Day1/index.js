//  const isEven=require("is-even");
// // console.log(isEven(2));
// // module.exports = {a:1,b:2}
// // const {a}=
// // const {obj,arr}=require("./another.js")
// // console.log(obj,arr[2]);
// // import {obj,arr,string} from "./another.js";
// // console.log(obj,arr[2],string[1]);
// // const x=require("./another");
// // console.log(x[0]);
// // const assert = require("assert");
// // console.log(assert.equal(1,2))
// // const fs=require("fs");

// // const data = fs.readFileSync("./test.txt",{encoding:"utf-8"});

// // console.log(data);

// // fs.readFile("./test.txt",{encoding:"utf-8"},(err, data)=>{
  
// //   if (err){
// // console.error("Error reading test",err.message);
// //   }
// // console.log(data);  
// // });
// const fs = require("fs");
// const os=require("os");
// const path = require("path");
// //  fs.readFile(
// //      path.join(".","test.txt"),
// //      {encoding:"utf-8"},(err, data)=>{
// // if (err){
// // console.error("Error reading test",err.message);
// //   }
// // console.log(data);  
// //  });
//  console.log(os.cpus().length)
//  console.log(os.networkInterfaces());
//  console.log(os.cpus().map(e=>e.speed));
//  console.log(os.version(),os.arch());
//  console.log(os.platform());
// console.log("outside readfile");
// console.log("rama");
// const str="hell\no"
// const str1="hell\to";
// const str2="\n";
// console.log(str,str2,str1);
// const sum=require("./practice")


// import { add, sub, mul, div, sin, cos, ten } from "./another.js";
// import{ randomInt} from "crypto"
//  //const { randomInt } = await import("node:crypto");
// const n = randomInt(1, 10);
// console.log(`The dice rolled:`,n);
// // console.log(uuid);
// console.log(
//   add(5, 5),
//   sub(6, 5),
//   mul(7, 8),
//   div(8, 8),
//   sin(45),
//   cos(60),
//   ten(45)
// );

const fs=require('fs')
// console.log(fs)

console.log(fs.readFileSync('./nepotism.txt',{encoding:"utf-8"},(x,y)=>{
  if(x) console.log(x)
  console.log(y)
}))