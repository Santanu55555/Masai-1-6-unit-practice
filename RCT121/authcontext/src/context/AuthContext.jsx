import { createContext,useState } from "react";
export const AuthContext = createContext()
export const AuthContextProvider = ({children})=>{
    const [isAuth,setIsAuth]=useState(false)
    const [token,setToken]=useState("")
    const getToken=(recievedtoken)=>{
        setToken(recievedtoken)
    }
    const handleAuth=()=>{
        setIsAuth(!isAuth)
    }
    return(
        <AuthContext.Provider value={{isAuth,handleAuth,token,getToken}} >{children}</AuthContext.Provider>
    )
}