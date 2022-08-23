import React from "react";
import HomePage from "../Components/HomePage";
import Login from "../Components/Login";
import Notes from "../Components/Notes";
import Register from "../Components/Register";
import { Routes, Route } from "react-router-dom";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/notes" element={<Notes />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;
