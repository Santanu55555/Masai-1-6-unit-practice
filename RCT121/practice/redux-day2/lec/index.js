// let value=0;''
import Store from "./store.js"
import {reducer} from "./reducer.js"
 const store= new Store(reducer, {
     count:50,
 } )


let counter=document.getElementById("counterValue");
let inc=document.getElementById("incrementValue");
let dec=document.getElementById("decrementValue");


counter.innerText=store.getState().count;

inc.addEventListener("click",()=>{

 

    store.dispatch({
        type:"INCREMENT"
    })

       counter.innerText= store.getState().count;
});


dec.addEventListener("click",()=>{

 

    store.dispatch({
        type:"DECREMENT"
    })

       counter.innerText= store.getState().count;
});