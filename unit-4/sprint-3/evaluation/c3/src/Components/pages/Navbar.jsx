// import { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
// import { AuthContext } from "../context/AuthContext";


const Nav = styled.nav`
  display: flex;
  background: black;
  padding: 20px;
  gap: 20px;
  justify-content: center;
`

// const Link = styled.NavLink`
//   color: white;

// `


export const Navbar = () => {
  // const { token } = useContext(AuthContext);
  // use token to chnage the text from Login to Logout once logged in successfully
 
  return (
    <>
      <Nav>
        {/* keep all the NavLinks here */}
        <NavLink to="/" style={{ color: "violet", textDecoration: "none" }}>
          Home
        </NavLink>
        <NavLink to="about" style={{ color: "violet", textDecoration: "none" }}>
          About
        </NavLink>
        <NavLink to="books" style={{ color: "violet", textDecoration: "none" }}>
          Books
        </NavLink>
        <NavLink to="login" style={{ color: "violet", textDecoration: "none" }}>
          Login
        </NavLink>
      </Nav>
    </>
  );
};
