// for (let i = 1; i < 10; i++){
//     console.log(i);
// }
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
console.log("Hello Typescript!");
// tsc
var my_name = "Chiranjit";
var myAge = 22;
var isMarried = false;
if (isMarried === false) {
    console.log("False");
}
else {
    console.log("True");
}
var arr = [1, 2];
var arr2 = __spreadArray(__spreadArray([], arr, true), [3], false);
function add(x, y) {
    return x + y;
}
add(1, 2);
// add("s", "s");
function sum(a, b) {
    return a + b;
}
add(5, 3);
var sum2 = function (a, b) {
    return a + b;
};
add(5, 3);
var santanu = {
    username: "Shanta_bantah", age: 24,
    species: { hasLegs: true, veg: true }
};
// type Dog={
//       food:string;
// }
var myDog = {
    NoOfLegs: 4,
    food: "pedigree",
    hasWings: false
};
