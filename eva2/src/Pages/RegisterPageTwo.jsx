import React, { createContext, useContext, useState } from "react"
import { Link } from "react-router-dom"



// const AuthContext = createContext();
export const Two=()=>{
// const {handleAuth}=useContext(AuthContext)
const [address,setaddress]=useState("")
const [number,setNumber]=useState("")

    return(
        <div>

            <input type="text" placeholder="useraddress" onChange={(e)=>setaddress(e.target.value)}/>
            <input type="number" placeholder="number" onChange={(e)=>setNumber(e.target.value)}/>
            <Link to="/Page1"><button>Prev</button></Link>
           <Link to="/"> <button>Submit</button></Link>
        </div>
    )
}