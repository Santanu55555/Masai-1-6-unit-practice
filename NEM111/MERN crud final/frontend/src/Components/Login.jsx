import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginAPI } from "../Redux/LoginSignUp/login.action";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { token, isLoading, isError, isAuth } = useSelector(
    (state) => state.login
  );
  console.log("token:", token);

  const handleLogin = () => {
    if (email && password) {
      const creds = {
        email: email,
        password: password,
      };
      dispatch(loginAPI(creds));
      setTimeout(() => {
        if (!isAuth) {
          alert("Login Failed,Please try again later,");
        } else {
          alert("Login successful!");
          navigate("/notes");
        }
      }, 2000);
    } else {
      alert("Login Failed, Enter All Fields");
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>Login</h1>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <button onClick={handleLogin}>Login</button>
      <a href="/" style={{ marginLeft: "15px" }}>
        Register
      </a>
    </div>
  );
};

export default Login;
