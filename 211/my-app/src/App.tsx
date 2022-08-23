import React from 'react';
import logo from './logo.svg';
import './App.css';
interface CounterBtn {
  label: string;
  onClick: (event?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

const CounterBtn: React.FunctionComponent<CounterBtn> = ({label, onClick}) => {
  
  return (
    <div className="counter-btn" onClick={onClick}>
      <div className="child">{label}</div>
    </div>
  )
}


interface CounterDisplayProps {
  count: number;
};

const CounterDisplay: React.FunctionComponent<CounterDisplayProps> = ({count}) => {  
  return (
    <div>{count}</div>
  );
}
function App() {
  const [count, setCount] = React.useState<number>(0);
  
  const inc = (event:any) => {
    console.log("btn", event.target)
    setCount(count + 1);
  };
  
  const dec = () => {
    setCount(count - 1);
  }
 
  return (
    <div>
      <CounterBtn label={"--"} onClick={dec}/>
      <CounterDisplay count={count} />
      <CounterBtn label={"++"} onClick={inc}/>
    </div>
  )
}

export default App;
