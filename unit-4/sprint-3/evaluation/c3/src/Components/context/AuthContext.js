import React, { useState } from "react";

const AuthContext = React.createContext();



const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [auth, setAuth] = useState(false);

  const handleLogin = async (email, password) => {
    //  api request to reqres.in for the token
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



  const handleLogout = () => {
    //  set token back to " " once logged out
     setAuth(!auth);
     setToken("");
  };

  const value = { handleLogin, token, handleLogout };




  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};



export { AuthContext, AuthContextProvider };
