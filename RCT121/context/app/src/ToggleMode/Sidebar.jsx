import React, { useContext } from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import SignpostOutlinedIcon from "@mui/icons-material/SignpostOutlined";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import { FlexDiv, SideDiv, SVG } from "./Main.styled";
import { ThemeContext } from "./Context/ThemeContext";

const Sidebar = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <SideDiv
      color={isDarkMode ? "#111" : "#fff"}
      shadow={!isDarkMode ? "0px 0px 5px 0px #e5e9f2" : ""}
    >
      <Stack direction="row" spacing={2}>
        <Avatar
          alt="Remy Sharp"
          src="https://mui.com/static/images/avatar/2.jpg"
        />
      </Stack>
      <FlexDiv>
        <SVG
          className="svg1"
          shadow={
            isDarkMode
              ? "0px 5px 15px 0px #07080880"
              : "0px 5px 15px 0px #acb2c1"
          }
        >
          <SignalCellularAltIcon />
        </SVG>
        <SignpostOutlinedIcon />
        <ShoppingBasketOutlinedIcon />
        <ForumOutlinedIcon />
        <DescriptionOutlinedIcon />
        <SettingsOutlinedIcon />
      </FlexDiv>
      <div className="add">
        <AddCircleOutlinedIcon />
      </div>
    </SideDiv>
  );
};

export default Sidebar;
