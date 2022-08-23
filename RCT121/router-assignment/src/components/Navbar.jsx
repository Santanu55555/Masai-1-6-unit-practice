import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "black",
        padding: "25px",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          Home
        </Link>
      
        <Link to="products" style={{ color: "white", textDecoration: "none" }}>
          Products
        </Link>
       
       </div>
    </div>
  );
}

export default Navbar;


