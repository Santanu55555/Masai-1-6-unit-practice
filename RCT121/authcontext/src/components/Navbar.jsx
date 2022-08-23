import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export const Navbar=()=>{
    const {handleAuth,getToken}= useContext(AuthContext)
    const postRequest=async()=>{
        axios.post('https://reqres.in/api/login', {
            "email": "eve.holt@reqres.in",
            "password": "cityslicka"
        }).then((res)=>getToken(res.data.token)).catch((error)=>console.log(error))
    }
    return(
        <div>
   <div>
    <button
    onClick={()=>{
        postRequest()
        handleAuth()
    }}>

    </button>
   </div>
        </div>
     
    )
}