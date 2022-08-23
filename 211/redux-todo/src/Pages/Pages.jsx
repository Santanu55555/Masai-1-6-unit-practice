import React from 'react'
import {Routes, Route} from 'react-router-dom';
import EditTodo from './EditTodo';
import Homepage from "./Homepage";
import SingleTodo from './SingleTodo';

const Pages = () => {
  return (
    <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/todos/:id" element={<SingleTodo/>}/>
        <Route path="/todos/:id/edit" element={<EditTodo/>} />
    </Routes>
  )
}

export default Pages;