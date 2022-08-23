import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const User = ({ name, img, points, city, level, progress }) => {
  return (
    <>
      <div style={{ display: "flex", width: "100%" }}>
        <Stack direction="row" spacing={2}>
          <Avatar alt="Remy Sharp" src={img} />
        </Stack>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div style={{ marginLeft: "10px" }}>
            <p>{name}</p>
            <p style={{ color: "#748AA1" }}>{city}</p>
          </div>
          <div className="dots">
            <MoreHorizIcon />
          </div>
        </div>
      </div>
      <div>
        <progress value={progress} max="100"></progress>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          marginTop: "10px",
        }}
      >
        <p>Professional level {level}</p>
        <h4>{points} Points</h4>
      </div>
    </>
  );
};

export default User;
