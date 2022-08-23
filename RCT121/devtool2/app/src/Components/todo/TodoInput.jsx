import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  getTodosLoading,
  getTodosSuccess,
  getTodosError,
} from "../../Redux/todo/action";
import { v4 as uuid } from "uuid";

export const TodoInput = () => {
  const [title, setTitle] = useState("");
  
  const dispatch = useDispatch();

  const handleAdd = () => {
    const payload = {
      id: uuid(),
      title,
      status: false,
    };
    fetch(`http://localhost:3005/todos`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: { "Content-Type": "application/json" },
    }).then(() => {
      dispatch(getTodosLoading());
      fetch(`http://localhost:3005/todos`)
        .then((res) => res.json())
        .then((res) => dispatch(getTodosSuccess(res)))
        .catch((err) => dispatch(getTodosError()));
    });
    setTitle("");
  };

  return (
    <div>
      <h1>TodoInput</h1>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <button onClick={handleAdd}>ADD TODO</button>
    </div>
  );
};


