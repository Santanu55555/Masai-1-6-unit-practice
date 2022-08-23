import React, { useState } from "react";

const AddTodo = ({ onAdd }) => {
  const [newTodo, setNewTodo] = useState("");

  const postTodo = async (value) => {
    let res = await fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        value,
        completed: false,
      }),
    });
    let data = await res.json();
    onAdd(data);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="enter your todo here"
        onChange={(e) => setNewTodo(e.target.value)}
        value={newTodo}
      />
      <button
        onClick={() => {
          if (newTodo.trim()) {
            postTodo(newTodo.trim());
            setNewTodo("");
          }
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddTodo;
