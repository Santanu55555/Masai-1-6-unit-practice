import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

export default function PrivateRout({children}) {
    const auth = useSelector(state=>{return state.auth.auth});
    if(auth){
        return children
    }
  return (
    <Navigate to ={"/auth"}></Navigate>
  )
}