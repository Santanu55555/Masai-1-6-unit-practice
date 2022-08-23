import { Box } from '@chakra-ui/react'
import React from 'react'
import { Routes,Route } from 'react-router-dom'
import { LogIn } from './LogIn'
import { SignUp } from './SignUp'

export const MainRoutes = () => {
  return (
    <Box >
        <Routes>
            <Route path="/" />
            <Route path="/login" element={<LogIn/>}/>
            <Route path="/signup" element={<SignUp/>}/>
        </Routes>
    </Box>
  )
}
