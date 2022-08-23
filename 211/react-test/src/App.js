import logo from './logo.svg';
import './App.css';
import { Button } from './Button';
import { useState } from 'react';

function App() {
  const [theme,setTheme]=useState('Light')

  return (
  
    <div>
      <h1>Current theme is {theme}</h1>
    <Button colorScheme={"green"} onClick={()=>setTheme(theme==="Light"?"Dark":"Light")}>Click me</Button>
    </div>
  );
}

export default App;
