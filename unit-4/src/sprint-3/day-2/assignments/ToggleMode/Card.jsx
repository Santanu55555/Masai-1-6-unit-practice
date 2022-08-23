import React, { useContext } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { CardDiv, UserDiv } from "./Main.styled";
import User from "./User";
import { UserData } from "./UserData";
import { ThemeContext } from "./Context/ThemeContext";

const Card = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div>
      <CardDiv
        bgcolor={isDarkMode ? "#292E33" : "#fff"}
        color={isDarkMode ? "#fff" : "#111"}
      >
        <div className="userDiv">
          <p>Active User</p>
          <div>
            <p>
              
              <span style={{ color: "#748AA1" }}>for</span> April 2022
            </p>
            <ArrowDropDownIcon />
          </div>
        </div>
        {UserData.map((item, index) => {
          return (
            <UserDiv color={isDarkMode ? "#33393F" : "#EBEDF4"} key={index}>
              <User {...item} />
            </UserDiv>
          );
        })}
      </CardDiv>
    </div>
  );
};

export default Card;
