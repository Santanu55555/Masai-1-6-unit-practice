import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, reset } from "../../redux/counter/action";

export const Counter = () => {
  const count = useSelector((state) => state.count.count);
  console.log("count:", count);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter: {count}</h1>
      <div>
        <button onClick={() => dispatch(increment(3))} >Inc By 3</button>
        <button onClick={() => dispatch(decrement(2))}>Dec By 2</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </div>
  );
};
