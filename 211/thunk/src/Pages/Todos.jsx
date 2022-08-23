
import React from 'react'
import { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getTodos } from '../Redux/action';
import {nanoid} from "nanoid"
import TodoInput from '../Component/TodoInput';
const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
 

  useEffect(()=> {
   if(todos?.length === 0){
   dispatch(getTodos())
   } 
   
  },[]);
  console.log(todos);


  return (
    <div>
      <h2>Todos</h2>
      <TodoInput />
      {
        todos?.map((item)=>{
         return <div key={nanoid()}> {item.title}</div>
        })
      }
    </div>
  )
}

export default Todos