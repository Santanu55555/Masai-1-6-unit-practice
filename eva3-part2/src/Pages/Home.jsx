import React, { useState } from 'react'

export const Home = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    // const dispatch =useDispatch()
    const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password);
  };

  
  return (
    <div>


        <input type="text" value={email} onChange={
            (e)=> setEmail(e.target.value)
        }/>
        <input type="password" value={password} onChange={
            (e)=> setPassword(e.target.value)
        }/>
        <input value="Login" type={"submit"} onClick={handleSubmit}/>
    </div>
  )
}
