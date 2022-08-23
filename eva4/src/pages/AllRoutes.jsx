import React from 'react'
import {Routes,Route} from 'react-router-dom'
import { Company } from './Company'
import { Home } from './Home'

export const AllRoutes = () => {
  return (
 <div>
     <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="Company" element={<Company/>}/>
        
    </Routes>
 </div>
  )
}
