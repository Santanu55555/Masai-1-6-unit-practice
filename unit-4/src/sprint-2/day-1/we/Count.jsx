import React from 'react'
import {useState} from "react"

export default function Count() {
    const [count,setCount] = useState(0)
  return (
    <div>
      <h1>{Count}</h1>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <button onClick={() => setCount(count - 1)}>Reduce</button>
    </div>
  );
}
