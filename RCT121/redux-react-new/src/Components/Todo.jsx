import React,{useEffect} from 'react'
import axios from 'axios'
import { useDispatch,useSelector } from 'react-redux'
import {TodoInput} from "./TodoInput"
import {TodoList} from "./TodoList"
import { getTodosFailure, getTodosRequest, getTodosSuccess ,getTodo} from '../Redux/action'


export const Todo = () => {
    
    const dispatch = useDispatch()
    useEffect(()=>{
      getTodo(dispatch)
    },[])
   
  return (
    <div>
      <h2>Todo Application</h2>
      <TodoInput/>
      <br />
      <TodoList/>
    </div>
  )
}