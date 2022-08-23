import React from 'react'
import { Link } from 'react-router-dom'
import { Todos } from '../Pages/Todos'

function Homepage() {
  return (
    <div>Homepage
         <Link to='/login'>Login</Link>
         <Link to='/signup'>Signup</Link>
         <Todos/>
    </div>
  )
}

export default Homepage