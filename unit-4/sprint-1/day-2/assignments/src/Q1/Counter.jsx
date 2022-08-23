import React from "react";
// import {useState} from 'react'

const Counter = () => {
    const [count, setCount] = React.useState(0);

    const handleChange = (value) => {
        setCount(count + value)
    }

    const handleDouble = (value)=>{
        setCount(count*value)
    }
    return(
        <>
            <h1 style={{ background:'aqua'}}>Counter</h1>
            <h2 style={count%2==0?{color:'green'}:{color:'red'}}>{count}</h2>
            <button onClick={()=>handleChange(1)}>Inc</button>
            <button onClick={()=>handleChange(-1)}>Dec</button>
            <button onClick={()=>handleDouble(2)}>Double</button>
            {/* <button onClick={()=>handleDouble(1/2)}>Half</button> */}
        </>
    )
}


export default Counter;