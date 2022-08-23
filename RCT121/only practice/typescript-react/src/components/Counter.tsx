import {useState}from"react";


type CounterProps={
    init?:number;
    children?:JSX.Element | JSX.Element[];
}
export const Counter=(props:CounterProps) =>{
    const {init =15,children}=props;
    const [counter,setCounter]=useState(init);
    return(
        <div>
            <h3>Counter:{counter}</h3>
            <button onClick={()=>setCounter(counter+1)}>Add</button>
        </div>
    )
}