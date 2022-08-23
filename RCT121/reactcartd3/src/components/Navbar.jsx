import React from "react";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import styled from "styled-components";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { NavLink } from "react-router-dom";

const Nav=styled.div`
    background-color: #0172bb;
    padding:10px;
    display:flex;
    justify-content: space-around;
    overflow: hidden;
`
const navlinkstyle={
  color:"white",
  textDecoration:"none"
}

const Navbar = () => {
  const {quantity}=useContext(CartContext)

  return (
    <Nav>
        <NavLink style={navlinkstyle} to="/">Home</NavLink>
        <NavLink style={navlinkstyle} to="/mobile">Mobile</NavLink>
        <NavLink style={navlinkstyle} to="/laptop">Laptop</NavLink>
        <NavLink style={navlinkstyle} to="/watch">Watch</NavLink>
        <NavLink style={navlinkstyle} to="/register">Register</NavLink>
        <NavLink style={navlinkstyle} to="/shoppingcart">

        <Badge badgeContent={quantity} color="success">
          <ShoppingCartOutlinedIcon color="#ffe83e" />
        </Badge>
        </NavLink>
      
    </Nav>
  );
};

export default Navbar;
