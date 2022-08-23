import React from 'react';

const Counter = () => {

    const [count, setCount] = React.useState(0);
    
  

    return (
      <>
        <h1>Counter</h1>
        <h1>{count}</h1>
        <button onClick={() =>   setCount( count-1)}>Decrease</button>
        <button onClick={() => setCount( count+1)}>Increase</button>
        <button onClick={() =>  setCount(2*count)}>Double</button>
        {/* <button onClick={() => handleDouble(1 / 2)}>Half</button>
        <button onClick={() => handleDouble(3)}>Triple</button> */}
      </>
    );
}

export default Counter;