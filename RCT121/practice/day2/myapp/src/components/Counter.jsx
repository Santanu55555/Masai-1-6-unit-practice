import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCounter, incrementCounter } from '../store/actions';

function Counter() {

    const count = useSelector((state) => state.count)
    const dispatch = useDispatch()
  return (
    <div style={{ marginTop: "60px" }}>
      Counter: {count}
      <div>
        <button onClick={() => dispatch(decrementCounter(1))}>Decrement</button>
        <button onClick={() => dispatch(incrementCounter(1))}>Increment</button>
      </div>
      <div>
        <button onClick={() => dispatch(decrementCounter(5))}>Decrement By 5</button>
        <button onClick={() => dispatch(incrementCounter(5))}>Increment By 5</button>
      </div>
      <div>
        <button onClick={() => dispatch(decrementCounter(10))}>Decrement By 10</button>
        <button onClick={() => dispatch(incrementCounter(10))}>Increment By 10</button>
      </div>
    </div>
  );
}

export default Counter