import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../../Redux/todo/action";

export const TodoItem = ({ id, title, status }) => {
  const dispatch = useDispatch();
  return (
    <div style={{display: 'flex', justifyContent: 'center', gap: "20px", marginTop: "20px"}}>
      <h3>{title}</h3>
      <button onClick={()=> deleteTodo(dispatch, id)}  >Delete</button>
    </div>
  );
};
