import React from 'react'
import Auth from './Auth'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import { useDispatch, useSelector } from 'react-redux'
import { getLogedInSucess, getLogedOutSucess } from '../authRedux/action';

function Todo() {
const auth = useSelector(state=>{ return state.auth.auth});
const  dispatch= useDispatch();
  const handelClick = ()=>{
    if(auth===false){
        dispatch(getLogedInSucess())
       localStorage.setItem("auth",true)
       
    }
    else if(auth===true){
        dispatch(getLogedOutSucess())
        localStorage.setItem("auth",false)
    }
}
  return (
    <div>
        <TodoInput></TodoInput>
        <TodoList></TodoList>
        <div>
        <button onClick={handelClick}>{auth?<div>logout</div>:<div>login</div>}</button>
        </div>
    </div>
  )
}

export default Todo