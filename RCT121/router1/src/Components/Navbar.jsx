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
        <Link to="banda" style={{ color: "white", textDecoration: "none" }}>
          Home
        </Link>
      
        <Link to="products" style={{ color: "white", textDecoration: "none" }}>
          Products
        </Link>
        <Link to="aboutus" style={{ color: "white", textDecoration: "none" }}>
          About Us
        </Link>
        <Link to="contactus" style={{ color: "white", textDecoration: "none" }}>Contact Us</Link>
        <Link to="FAQ" style={{ color: "white", textDecoration: "none" }}>FAQ</Link>
      </div>
      <div
        style={{
          marginRight: "20px",
          color: "white",
        }}
      >
        <Link to="/cart" style={{ color: "white", textDecoration: "none"}}>Cart</Link>
      </div>
    </div>
  );
}

export default Navbar;
