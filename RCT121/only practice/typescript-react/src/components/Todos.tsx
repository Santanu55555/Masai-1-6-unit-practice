import { useState } from "react"
import {v4 as uuidv4}from "uuid";

type TodoType={
    id:string;
    title:
}
export const Todos = () => {

    const [text,setText]=(useState(""))

    const [todos,setTodos]=(useState<number[]>([]))


  return (
    <div>

    <input  value={text} onChange={(e)=>{setText(e.target.value)}} />{" "}

    <button onClick={()=>{
        const payload ={id:uuid(),title:text,status:false};
        setTodos([...todos,payload])
    }}>
        Add Todo
    </button>
    {todos.map((t)=>(
        <div key={t.id}
    ))}
    </div>
  )
}
