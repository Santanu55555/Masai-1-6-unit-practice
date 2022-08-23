function sum(a, b){
    return a+b
 }
 console.log("Sum is:");
 console.log(sum(1,2));

 function sum(a, b, callback){
    // Any extensive blocking code here
    let res = a+b;
    callback(res);
}

sum(1, 2, console.log)

// const add5=(a)=>{
//     console.log(a+5)
// }

// const add7=(a)=>{
//     console.log(a+7)
// }
// // export { add5,add7}
// module.exports =(add5)
// function addFive(a){
//     return a+5;
// }
// function addTen(a){
//      return a+10;
// }
//  const arr=[1,3,5];
// const obj={a:"ram",b:"sita"};
// const string = "rama"
// export {arr,obj,string} 
// // module.exports={
// //     obj,
// //     arr,
// //     addTen,
// //     addFive,
// // };
// //module.exports=arr;
const add = (a, b) => {
  return a + b;
};

const sub = (a, b) => {
  return a - b;
};

const mul = (a, b) => {
  return a * b;
};
// module.exports=sum
const div = (a, b) => {
  return a / b;
};

const sin = (a) => {
  return Math.sin(a);
};

const cos = (a) => {
  return Math.cos(a);
};

const ten = (a) => {
  return Math.tan(a);
};

export { add, sub, mul, div, sin, cos, ten }

