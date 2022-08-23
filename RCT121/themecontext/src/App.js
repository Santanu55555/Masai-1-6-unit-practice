import logo from "./logo.svg";
import "./App.css";

import { Navbar } from "./components/Navbar";
import { Forms } from "./components/Forms";
import { Theme } from "./components/Theme";
import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";

function App() {
  const {theme}=useContext(ThemeContext);
  return (
    <div className="App">
      <div
        style={{
          background: theme === true ? "black" : "white",
          color: theme === true ? "white" : "black",
        }}
      >
        <Navbar />
        <Theme />
        <Forms />
      </div>
    </div>
  );
}

export default App;
