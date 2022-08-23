import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme, themeMode } = useContext(ThemeContext);

  return (
    <div
      style={{
        width: "100%",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        ...themeMode,
      }}
    >
      <h2>Navbar</h2>
      <button onClick={toggleTheme}>
        {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
};

export default Navbar;
