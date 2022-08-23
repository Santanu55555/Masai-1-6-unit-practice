import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import TodoList from "./TodoList";
import "./Todo.css";

const Todo = () => {
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);

  const addData = () => {
    if (task.trim().length > 0) {
      let payload = {
        id: uuid(),
        title: task,
        status: false,
      };
      setTodo([...todo, payload]);
      setTask("");
    }
  };

  const deleteItem = (id) => {
    let newTodo = todo.filter((el) => {
      return el.id !== id;
    });
    setTodo(newTodo);
  };
  return (
    <div id="container">
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter the task"
          onChange={(e) => {
            setTask(e.target.value);
          }}
          value={task}
        />
        <button className="Additem" onClick={addData}>
          +
        </button>
      </div>

      <TodoList data={todo} deleteItem={deleteItem} />
    </div>
  );
};

export default Todo;
