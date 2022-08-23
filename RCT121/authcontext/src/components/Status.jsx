import {useContext} from 'react'
import { AuthContext } from '../context/AuthContext'
export const Status=()=>{
    const {isAuth,token}=useContext(AuthContext)
    return(
        <div>
            <p>Status of Login<span>{isAuth?"LoggedIn":"Log In PLease"}</span></p>
            <p>Token: <span>{isAuth?token:null}</span></p>
        </div>
    )
}