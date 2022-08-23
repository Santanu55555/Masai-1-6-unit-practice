import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {

    const [email, setEmail]=useState('')
    const [password, setPassword]=useState("")


    const handleSubmit=async()=>{
        const payload = {
            email,
            password
        }
        
        await fetch("https://shrouded-journey-98772.herokuapp.com/user/register",{
            method : "POST",
            body : JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json'
              },
        })
    }


  return (
    <div>
      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      ></input>
      <Link to='/login' onClick={handleSubmit}>Signup</Link>
    </div>
  );
}

export default Signup;
