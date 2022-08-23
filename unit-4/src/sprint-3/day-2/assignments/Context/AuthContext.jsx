import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState("");

  const [auth, setAuth] = useState(false);

  const isAuth = async () => {
    let res = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        email: "eve.holt@reqres.in",
        password: "cityslicka",
      }),
    });
    let data = await res.json();
    setToken(data.token);
    setAuth(true);
  };

  const toggleAuth = () => {
    setAuth(!auth);
    setToken("");
  };

  const value = { token, isAuth, toggleAuth, auth };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
