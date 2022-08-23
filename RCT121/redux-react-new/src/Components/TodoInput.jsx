// import axios from 'axios'
import React,{ useState } from 'react'
import { addTodo, getTodo } from '../Redux/action'
import {useDispatch } from 'react-redux'
import { addTodosFailure, addTodosRequest,addTodosSuccess } from '../Redux/action.js'



export const TodoInput=()=>{

    const [text,setText]=useState("")
     const [descp,setDescp]=useState("")
    const dispatch=useDispatch();

    const handleadd = () => {
    addTodo({
        title:text,
        desc:descp,
        status:false,
        dispatch
 }).then(()=>{
    getTodo(dispatch)
    setText("")
    setDescp("")
    })
}

    return(
        <div>
            <input type="text" value={text} onChange={e=>{setText(e.target.value)}} />
            <textarea name="" id="" cols="30" rows="10" placeholder='Description...' value={descp} onChange={e=>(setDescp(e.target.value))}></textarea>
            <button onClick={handleadd}>Add Todo</button>
        </div>
    )

}