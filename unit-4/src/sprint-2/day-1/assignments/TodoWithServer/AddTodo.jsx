import React, { useState } from "react";

const AddTodo = ({ onAdd }) => {
  const [newTodo, setnewTodo] = useState("");

  const addTodos = async (value) => {
    try {
      let res = await fetch("http://localhost:3000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          value,
          completed: false,
        }),
      });
      let data = await res.json();
      onAdd(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="todo_input">
      <input
        type="text"
        value={newTodo}
        placeholder="Enter your todo here"
        onChange={(e) => setnewTodo(e.target.value)}
      />
      <button
        className="btn"
        onClick={() => {
          let value = newTodo.trim();
          if (value) {
            addTodos(value);
            setnewTodo("");
          }
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddTodo;
