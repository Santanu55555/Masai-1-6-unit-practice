import { AllRoutes } from "./Pages/AllRoutes";
import { Navbar } from "./Pages/Navbar";
import "./styles.css";
import React from "react";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
  );
}
