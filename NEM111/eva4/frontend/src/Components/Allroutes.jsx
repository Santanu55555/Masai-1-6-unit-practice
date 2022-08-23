import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import { Todos } from '../Pages/Todos'
import Homepage from './Homepage'

function Allroutes() {
  return (
  <div>
  <Routes>
  <Route path="/" element={<Homepage />} />
  <Route path="/signup" element={<Signup />} />
  <Route path="/login" element={<Login />} />
  <Route path="/todos" element={<Todos />} />
</Routes>
  </div>
  )
}

export default Allroutes