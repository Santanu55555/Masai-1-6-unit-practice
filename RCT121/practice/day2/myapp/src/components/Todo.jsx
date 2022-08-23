import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../store/actions";

function Todo({ id, value }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    deleteTodo(dispatch, id);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "10px",
        gap: "10px",
      }}
    >
      <div>{value}</div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Todo;
