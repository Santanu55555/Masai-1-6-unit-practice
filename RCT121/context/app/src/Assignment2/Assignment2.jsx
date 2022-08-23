import React from "react";
import { ThemeProvider } from "../Context/ThemeContext";
import Footer from "./Footer";
import Form from "./Form";
import Navbar from "./Navbar";
import "./Styles.css";

const Assignment2 = () => {
  return (
    <ThemeProvider>
      <div>
        <Navbar />
        <Form />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Assignment2;
