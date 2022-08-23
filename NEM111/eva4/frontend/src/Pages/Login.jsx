import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {

    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')

    const handleSubmit=async() => {
        const payload = {
            email,
            password
        }
        await fetch("https://shrouded-journey-98772.herokuapp.com/user/login",{
            method : "POST",
            body : JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json'
              },
        }).then((res)=>res.json()).then((res)=>{
            localStorage.setItem("token",res.token)
            localStorage.setItem("userid", JSON.stringify(res._id))

        })
        .catch((err) =>   console.error(err) )
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
      <button onClick={handleSubmit}><Link to="/todos">Login</Link></button>
    </div>
  );
}

export default Login;
