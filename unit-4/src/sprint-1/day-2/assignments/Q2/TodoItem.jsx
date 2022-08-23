import React from "react";

const TodoItem = ({ item }) => {
  // const {title,id}
  return (
    <>
      <h1 key={item.id}>{item.title}</h1>
      {/* <button onClick="handleRemove">Delete</button> */}
    </>
  );
};

export default TodoItem;
