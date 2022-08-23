import React from 'react'
import {Routes,Route} from "react-router-dom"
import Auth from '../component/Auth'
import Todo from '../component/Todo'
import PrivateRout from './PrivateRout'
function Allroutes() {
  return (
    <div>
       <Routes>
            <Route path='/' element={<PrivateRout>
                <Todo/>
              </PrivateRout>}/>
            <Route path="/auth" element={<Auth/>}/>
        </Routes>
    </div>
  )
}

export default Allroutes