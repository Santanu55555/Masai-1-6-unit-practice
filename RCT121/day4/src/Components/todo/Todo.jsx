// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getTodosData } from "../../Redux/todo/action";
// import { TodoInput } from "./TodoInput";
// import { TodoItem } from "./TodoItem";

// export const Todo = () => {
//     const { loading, error, todos } = useSelector((state) => state.todos);
//   const dispatch = useDispatch();
  
//   useEffect(() => {
//     getTodosData(dispatch);
//   }, [dispatch]);

//   return loading ? (
//     <h1>Loading...</h1>
//   ) : error ? (
//     <h1>Oops! Something went wrong...</h1>
//   ) : (
//     <>
//       <TodoInput />
//       <br />
//       {todos.map((todo) => {
//         return <TodoItem key={todo.id} {...todo} />;
//       })}
//     </>
//   );
// };
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {TodoInput }from "./TodoInput"
import { TodoItem } from "./TodoItem"


export const Todo =()=>{


const {loading , error , todos}= useSelector((state)=>state.todos)

const dispatch= useDispatch();


 useEffect()

  return (

    <>
    <TodoInput/>

{todos.map((todo)=>{
      return (
        <TodoItem key={todo.id} {...todo} />
      )
    })
  }

    </>

  )

}