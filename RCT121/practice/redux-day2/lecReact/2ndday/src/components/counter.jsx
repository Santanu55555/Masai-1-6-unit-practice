import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import dispatch from '../redux-1/store'
import { decrementcounter, incrementcounter } from "../store/actions";

function Counter() {
  const dispatch = useDispatch();

  const count = useSelector((state) => state.count);
  return (
    <div>
      Counter: {count}
      <button onClick={() => dispatch(incrementcounter())}>Increment</button>
      <button onClick={() => dispatch(decrementcounter())}>Decrement</button>
    </div>
  );
}

export default Counter;
