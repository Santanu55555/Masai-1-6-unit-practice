import React, { useContext } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import { IOSSwitch } from "./IOSSwitch.jsx";
import { NavDiv } from "./Main.styled.js";
import { ThemeContext } from "./Context/ThemeContext.jsx";

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <NavDiv color={isDarkMode ? "#fff" : "#111"}>
      <p className="heading">My Dashboard</p>
      <span className="mode">Dark Mode</span>
      <FormControlLabel
        control={<IOSSwitch sx={{ m: 1 }} onClick={toggleTheme} />}
      />
    </NavDiv>
  );
};

export default Navbar;
