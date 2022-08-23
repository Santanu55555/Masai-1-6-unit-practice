import { ThemeProvider } from "./Context/ThemeContext";
import React from "react";
import Dashboard from "./Dashboard";
import "./Main.css";

const Assignment3 = () => {
  return (
    <ThemeProvider>
      <Dashboard />
    </ThemeProvider>
  );
};

export default Assignment3;
