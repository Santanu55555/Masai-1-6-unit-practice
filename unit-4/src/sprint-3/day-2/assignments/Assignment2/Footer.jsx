import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const Footer = () => {
  const { themeMode } = useContext(ThemeContext);
  return (
    <div
      style={{
        width: "100%",
        height: "200px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...themeMode,
      }}
    >
      <h1>Footer</h1>
    </div>
  );
};

export default Footer;
