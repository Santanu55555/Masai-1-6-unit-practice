import React, { useState } from "react";

const Counter = ({ value }) => {
  const [count, setCount] = useState(value);

  const handleClick = (value) => {
    setCount((prevCount) => prevCount + value);
  };
  const dblValue = (value) => {
    setCount((prevCount) => prevCount * value);
  };
  let color;
  count % 2 === 1 ? (color = "red") : (color = "green");

  return (
    <>
      <h1>Counter</h1>
      <h2 style={{ color: color }}>{count}</h2>
      <button onClick={() => handleClick(1)}>Inc</button>
      <button onClick={() => handleClick(-1)}> Dec</button>
      <button onClick={() => dblValue(2)}> Double</button>
    </>
  );
};

export default Counter;
