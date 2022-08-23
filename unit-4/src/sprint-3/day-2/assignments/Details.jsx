import React, { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";

const Details = () => {
  const { auth, token } = useContext(AuthContext);
  return auth ? (
    <div
      style={{
        textAlign: "center",
        marginTop: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <p>User Logged in with token-</p>{" "}
      <h1 style={{ marginLeft: "10px" }}>{token}</h1>
    </div>
  ) : (
    <p
      style={{
        textAlign: "center",
        marginTop: "20px",
      }}
    >
      User not logged in
    </p>
  );
};

export default Details;
