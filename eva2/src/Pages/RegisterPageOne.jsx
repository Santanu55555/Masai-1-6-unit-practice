import React, { useState } from "react"
import { Link } from "react-router-dom"

export const One=()=>{

const [name,setName]=useState("")
const [email,setEmail]=useState("")

    return(
        <div>

            <input type="text" placeholder="username" onChange={(e)=>setName(e.target.value)}/>
            <input type="email" placeholder="email" onChange={(e)=>setEmail(e.target.value)}/>
            <Link to="/Page2"><button>Next</button></Link>
        </div>
    )
}