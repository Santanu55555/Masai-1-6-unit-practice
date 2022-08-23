import React,{ useState,useRef } from 'react';
import PropTypes from 'prop-types';
import PinItem from "./PinItem"

const Pin = ({length,setOtpHandler}) => {
  const inputRef=useRef([]);

  const [inputBoxLen] = useState(new Array(length).fill(1));
  
  const [inputvalue,setInputValue] = useState(
    new Array(length).fill(""))

  const handleChange=(e,index) => {
    inputvalue[index] = e.target.value;
    setInputValue(inputvalue);
    if(e.target.value.length >0 && index<length -1){
    inputRef.current[index+1].focus();
    }
    console.log(inputvalue);
    setOtpHandler(inputvalue.join(""))
  }

  const handleBackspace=(e,index)=>{
    if(index>0){
      inputRef.current[index-1].focus();
    }
  }

  const handlePaste=(e)=>{
    e.preventDefault();
    const data=e.clipboardData.getData("text");
  }

  return (
    <div onPaste={handlePaste} style={{
      display:"flex", 
      justifyContent:"center"
      }}>
        {inputBoxLen.map((item,index) => {
            return (
            <PinItem key={index}
            changehandler={(e)=>handleChange(e,index)}
            onBackSpaceHandler={(e)=>handleBackspace(e,index)}
            ref={(element)=>{              
              inputRef.current[index]=element;
            }}
            />
            )
        })}
    </div>
  )
}

Pin.propTypes = {
  length: PropTypes.number,
  onChange: PropTypes.func
}

export default Pin;