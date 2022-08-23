import React, { useState } from "react"


const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = async () => {
        const payload = {
            email,
            password
        }
         await fetch("https://whispering-spire-57616.herokuapp.com/user/register", {
            method : "POST",
            body : JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json'
              },
        })
    }
    return <div>
        <input type="email" placeholder="email" value={email} onChange={handleEmailChange}></input>
        <input type="text" placeholder="password" value={password} onChange={handlePasswordChange}></input>
        <button onClick={handleSubmit}>Register</button>
    </div>
}

export {Register}