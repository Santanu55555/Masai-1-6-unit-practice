import React, { useState } from "react";
import styles from "./todo.module.css";
const Todo = ({ todo, onDelete, onEdit }) => {
  const [isEditable, setIsEditable] = useState(false);
  const [value, setValue] = useState(todo.value);

  const deleteTodo = async () => {
    await fetch(`http://localhost:3000/todos/${todo.id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    });
    onDelete(todo.id);
  };

  const editTodo = async () => {
    let res = await fetch(`http://localhost:3000/todos/${todo.id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        value,
        completed: true,
      }),
    });
    let data = await res.json();
    onEdit(data);
  };

  return (
    <div
      className={`${styles.flex} ${todo.completed ? styles.lineThrough : ""}`}
    >
      {isEditable ? (
        <div>
          <input
            type="text"
            placeholder="enter your todo here"
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <button
            onClick={() => {
              if (value.trim()) {
                editTodo();
                setIsEditable(false);
              }
            }}
          >
            Update
          </button>
        </div>
      ) : (
        <div>{todo.value}</div>
      )}

      <div>
        <button onClick={() => setIsEditable(!isEditable)}>Edit</button>
        <button onClick={deleteTodo}>Delete</button>
      </div>
    </div>
  );
};

export default Todo;
