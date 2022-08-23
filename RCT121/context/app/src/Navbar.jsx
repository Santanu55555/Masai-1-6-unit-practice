import React, { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";

const Navbar = () => {
  const { auth, isAuth, toggleAuth } = useContext(AuthContext);
  console.log(auth);
  return (
    <>
      <nav
        style={{
          width: "100%",
          height: "60px",
          backgroundColor: "#bbb",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {auth ? (
          <button
            style={{
              padding: "6px 12px",
              backgroundColor: "#111",
              color: "#fff",
              cursor: "pointer",
              fontSize: "20px",
            }}
            onClick={toggleAuth}
          >
            LogOut
          </button>
        ) : (
          <button
            style={{
              padding: "6px 12px",
              backgroundColor: "#111",
              color: "#fff",
              cursor: "pointer",
              fontSize: "20px",
            }}
            onClick={isAuth}
          >
            Login
          </button>
        )}
      </nav>
    </>
  );
};

export default Navbar;
