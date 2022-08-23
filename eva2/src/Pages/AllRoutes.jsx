import {Route,Routes} from "react-router-dom"
import { Dashboard } from "./Dashboard"
import { One } from "./RegisterPageOne"
import { Two } from "./RegisterPageTwo"
import React from "react"
import { PrivateRoute } from "./PrivateRoute"

export const Rasta=()=>{
 


    return(
<>
        <Routes>
    <Route path="/" element={<Dashboard/>}/>
    <Route exact path="/Page1" element={<One/>}/>
        <Route exact path="/Page2" element={<Two/>}/>
</Routes>
</>
    )
}