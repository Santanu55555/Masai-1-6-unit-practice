import React from 'react'
import { useState } from 'react'

export const Counter = () => {
    const [count,setCount]=useState(0)

  return (
    <div ><h3>Counter {count}</h3>
    <button onClick={()=>setCount+1}>add</button>
    <button onClick={()=>setCount-1}>reduce</button>
    </div>
  )
}
