import React, { useContext } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { HeroSection } from "./Main.styled";
import Card from "./Card";
import { ThemeContext } from "./Context/ThemeContext";

const Dashboard = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <>
      <HeroSection color={isDarkMode ? "#1F2327" : "#f5f6fa"}>
        <Navbar />
        <Sidebar />
        <Card />
      </HeroSection>
    </>
  );
};

export default Dashboard;
