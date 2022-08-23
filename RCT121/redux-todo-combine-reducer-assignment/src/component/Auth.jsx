import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom';
import { getLogedInSucess, getLogedOutSucess } from '../authRedux/action';
import {addTodo, getTodo} from "../todoRedux/reducer"
function Auth() {
    const auth = useSelector(state=>{ return state.auth.auth});
    const loading = useSelector(state=>{return state.auth.loading});
    const  dispatch= useDispatch();
    const [flag,setFlag] = useState(false);
    const navigate = useNavigate()
    console.log(auth)
    
    const handelClick = ()=>{
        if(auth!=true){
            dispatch(getLogedInSucess())
           localStorage.setItem("auth",true)
           
        }
        else if(auth!=false){
            dispatch(getLogedOutSucess())
            localStorage.setItem("auth",false)
        }
    }
    
 if(auth){
     return <Navigate to="/"></Navigate>
 }
  return (
    <div>
        <button onClick={handelClick}>{auth?<div>logout</div>:<div>login</div>}</button>
    </div>
  )
}

export default Auth