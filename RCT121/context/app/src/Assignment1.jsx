import React from "react";
import { AuthProvider } from "./Context/AuthContext";
import Details from "./Details";
import Navbar from "./Navbar";

const Assignment1 = () => {
  return (
    <div>
      <AuthProvider>
        <Navbar />
        <Details />
      </AuthProvider>
    </div>
  );
};

export default Assignment1;
