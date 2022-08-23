import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodosError, getTodosLoading, getTodosSuccess } from "../../Redux/todo/action";
import { TodoInput } from "./TodoInput";
import { TodoItem } from "./TodoItem";

export const Todo = () => {
    const { loading, error, todos } = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(getTodosLoading())

        fetch(`http://localhost:3005/todos`)
          .then((res) => res.json())
          .then((res) => dispatch(getTodosSuccess(res)))
          
          .catch((error)=>dispatch(getTodosError()))
    }, [dispatch]);

  return loading ? (
    <h1>Loading...</h1>
  ) : error ? (
    <h1>Oops! Something went wrong...</h1>
  ) : (
    <>
      <TodoInput />
      <br />
      {todos.map((todo) => {
        return <TodoItem key={todo.id} {...todo} />;
      })}
    </>
  );
};
