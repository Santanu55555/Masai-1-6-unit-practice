import React from "react";
import { useSelector } from "react-redux";
import { TodoInput } from "./TodoInput";
import { TodoItem } from "./TodoItem";

export const Todo = () => {
  const { todos } = useSelector((state) => state.todos);
  return (
    <>
      <TodoInput />
      <br />
      {todos.map((todo) => {
        return <TodoItem key={todo.id} {...todo} />;
      })}
    </>
  );
};
