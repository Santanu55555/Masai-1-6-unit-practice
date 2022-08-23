import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {addTodo, getTodo} from "../todoRedux/reducer"
function TodoInput() {
    const [text,setText] = useState("");
    const dispatch = useDispatch();
     const handelAddTodo = () =>{
        addTodo({
            title:text,
            dispatch
        }).then(()=>{
            getTodo(dispatch)
            setText("");
        })
        
     }
  return (
    <div>
        <input value={text} onChange = {(e)=>{setText(e.target.value)}} placeholder="enter todo"></input>
        <button onClick={handelAddTodo}>Add</button>
    </div>
  )
}

export default TodoInput