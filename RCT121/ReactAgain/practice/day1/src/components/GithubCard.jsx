import React from "react";

const GithubCard = ({ avatar, name, language }) => {
  return (
    <div style={{ marginBottom: "30px" }}>
      <div
        style={{
          display: "flex",
          backgroundColor: "rgb(10,25,41)",
          height: "300px",
          width: "60%",
          margin: "auto",
          borderRadius: "10px",
          boxShadow:
            "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
        }}
      >
        <img
          style={{
            height: "200px",
            padding: "5px",
            border: "3px solid white ",
            width: "200px",
            borderRadius: "50%",
            margin: "50px",
          }}
          src={avatar}
          alt=""
        />
        <h2
          style={{
            marginTop: "135px",
            paddingLeft: "30px",
            color: "white",
            backgroundColor: "rgb(10,25,41)",
          }}
        >
          UserName : {name}{" "}
        </h2>
        {/* <h2>{props.name}</h2> */}
        <p 
          style={{
            marginTop: "130px",
            paddingLeft: "30px",
            color: "white",
            backgroundColor: "rgb(10,25,41)",
            color:"skyblue"
           
          }}
        >
        {/* <a href="https://api.github.com/users/facebook/repos">Github</a> */}
          {language}

          
        </p>
      </div>
    </div>
  );
};

export default GithubCard;