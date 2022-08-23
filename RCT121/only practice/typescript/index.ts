// for (let i = 1; i < 10; i++){
//     console.log(i);
// }

// console.log("Hello Typescript!");
// tsc

// const my_name: string = "Chiranjit";
const myAge: number = 22;
const isMarried: boolean = false;

if (isMarried === false) {
    console.log("False");
    
} else {
    console.log("True");
    
}
const arr: number[] = [1, 2];
const arr2 = [...arr, 3];

function add(x:number,y:number) {
    return x + y;
}

add(1, 2);
// add("s", "s");


function sum(a:number,b:number):number {
    return a + b;
}

add(5, 3);

const sum2=(a:number,b:number):number => {
    return a + b;
}

add(5, 3)

type Human={
    hasLegs: boolean, 
    veg: boolean,
}



type User={
    username:string;
    age:number;
    married?:boolean;
    species:Human;
}

const santanu:User = {
    username:"Shanta_bantah",age:24,
    species:{hasLegs:true,veg:true}
}

interface Pet{
    name:string;
    age:number;
    owner?:Human;
    species:Animal;
}

interface Animal{
    NoOfLegs:number;
    hasWings:boolean;
}

interface Dog extends Animal{
    food:string;
    NoOfLegs:4;

}
// type Dog={
//       food:string;
// }
const myDog : Dog & Animal= {
    NoOfLegs:4,
    food:"pedigree",
    hasWings:false,
}

function concat(a: number, b: number):number {
    return (a + b);
}
