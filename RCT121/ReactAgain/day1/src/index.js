import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));


// const elem=React.createElement(

//     "button",
//     {onClick:()=>alert("oops")},
//     "CLICK ME"

// );

// const elemWithJSX=(
//     <button onClick={()=>alert("with JSX")}>CLICK ME</button>
// );


// const Button=(props)=>{
//      <button onClick={()=>props?.handleClick()}>{props.title}</button>
// }

// const MyApp =React.createElement("div",{},[
//     elem,
//     elemJSX,
//     Button({title:"HELLO",handleClick:()=>alert("1")})
// ])

// <div>
//     <Button handleClick={()=>alert("JSX")} title="jsx"/>
// </div>

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
