import { useState } from "react";

export const useCounter = ({initialValue,maxValue,minValue}) => {
  

const [count,setValue]=useState(initialValue)
const incCount =(a)=>{setValue(c =>count<=maxValue?(a?c + a:c+1):c+0)}
const decCount =(b)=>{setValue(c =>count>=minValue?( b?c - b:c-1):c+0)}
return {count,incCount,decCount}
};
