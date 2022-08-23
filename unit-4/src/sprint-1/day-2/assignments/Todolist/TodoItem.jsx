import React from "react";

const TodoItem = ({ title, dltItem, id }) => {
  return (
    <div className="todoItem">
      <h1>{title}</h1>
      <button className="dltBtn" onClick={() => dltItem(id)}>
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
