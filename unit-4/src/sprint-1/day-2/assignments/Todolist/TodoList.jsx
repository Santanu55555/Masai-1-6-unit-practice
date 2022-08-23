import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ data, deleteItem }) => {
  return (
    <>
      {data.map((item) => {
        return <TodoItem key={item.id} {...item} dltItem={deleteItem} />;
      })}
    </>
  );
};

export default TodoList;
