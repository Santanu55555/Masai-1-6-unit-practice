import React, { useState } from "react";

const Todo = ({ value, completed, id, handleDlt, handleEdit }) => {
  const [editTodo, setEditTodo] = useState(value);
  const [isEditable, setIsEditable] = useState(false);

  const deleteItem = async () => {
    try {
      await fetch(`http://localhost:3000/todos/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
      handleDlt(id);
    } catch (error) {
      console.log(error);
    }
  };

  const EditItem = async () => {
    try {
      let res = await fetch(`http://localhost:3000/todos/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          value: editTodo,
          completed: false,
        }),
      });
      let data = await res.json();
      handleEdit(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {isEditable ? (
        <div>
          <input
            type="text"
            value={editTodo}
            placeholder="Enter your todo here"
            onChange={(e) => setEditTodo(e.target.value)}
          />
          <button
            className="btn"
            onClick={() => {
              let v = editTodo.trim();
              if (v) {
                EditItem();
                setIsEditable(!isEditable);
              }
            }}
          >
            Add
          </button>
        </div>
      ) : (
        <div className="todo_item">
          <h2>{value}</h2>
          <div>
            <button className="btn2" onClick={() => setIsEditable(!isEditable)}>
              Edit
            </button>
            <button className="btn2" onClick={deleteItem}>
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Todo;
