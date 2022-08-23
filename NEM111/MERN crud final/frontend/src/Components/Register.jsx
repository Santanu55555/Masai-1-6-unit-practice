import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerAPI } from "../Redux/LoginSignUp/login.action";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = () => {
    if (email && password) {
      const payload = {
        email: email,
        password: password,
      };
      // fetch("http://localhost:8080/user/register", {
      //   method: "POST",
      //   body: JSON.stringify(payload),
      // });
      dispatch(registerAPI(payload));
      alert("Registration Successfull");
      navigate("/login");
    } else {
      alert("Registration Failed, Enter All Fields");
    }
  };
  return (
    <div>
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
      <button onClick={handleRegister}>Register</button>
      <a href="/login" style={{ marginLeft: "15px" }}>
        Login
      </a>
    </div>
  );
};

export default Register;
