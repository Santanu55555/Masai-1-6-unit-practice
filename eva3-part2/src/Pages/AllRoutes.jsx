import React from 'react'
import { Home } from './Home'
import { Posts } from './Posts'
import { Route, Routes } from 'react-router'

export const AllRoutes = () => {
  return (
    <div>

    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/post" element={<Posts />}/>
    </Routes>

    </div>
  )
}
