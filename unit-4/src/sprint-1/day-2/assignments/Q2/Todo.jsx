import React from "react";
import { useState } from "react";
import { nanoid } from "nanoid";
import TodoItem from "./TodoItem";
import "./Todo.css"

const Todo = () => {
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);

  //set the task when change
  const handleChange = (e) => {
    setTask(e.target.value);
  };
  const handleClick = (e) => {
    let taskObj = {
      title: task,
      status: false,
      id: nanoid(),
    };
    setTodo([...todo, taskObj]);
  };

  // const handleRemove = (id) => {
  //   console.log(id);
  // };

  return (
    <>
      <input
        type="text"
        value={task}
        placeholder="Write Something"
        onChange={handleChange}
        // style={{backgroundColor:'#1fd0fd'}}
      />
      <button onClick={handleClick}>+</button>
      {todo.map((item) => {
        // return <h1 key={item.id}>{item.title}</h1>
        return <TodoItem key={item.id} item={item} />;
      })}
    </>
  );
};

export default Todo;
