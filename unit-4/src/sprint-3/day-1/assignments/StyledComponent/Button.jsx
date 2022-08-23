import React from "react";
import { StyledButton } from "./App.styled.js";

const Button = () => {
  return (
    <>
      <StyledButton
        color={"#fff"}
        bgColor={"#2490FE"}
        radius={"4px"}
        padding={"4px 8px"}
        border={"none"}
        margin={"10px 4px"}
      >
        Primary Button
      </StyledButton>
      <StyledButton
        color={"black"}
        bgColor={"#fff"}
        radius={"4px"}
        padding={"4px 8px"}
        border={"solid"}
        margin={"10px 4px"}
      >
        Default Button
      </StyledButton>
      <StyledButton
        color={"#111"}
        bgColor={"#fff"}
        radius={"4px"}
        padding={"4px 8px"}
        border={"dashed"}
        margin={"10px 4px"}
      >
        Dashed Button
      </StyledButton>
      <StyledButton
        color={"#111"}
        bgColor={"#fff"}
        radius={"4px"}
        padding={"4px 8px"}
        border={"none"}
        margin={"10px 4px"}
      >
        Text Button
      </StyledButton>
      <StyledButton
        color={"#2490FE"}
        bgColor={"#fff"}
        radius={"4px"}
        padding={"4px 8px"}
        border={"none"}
        margin={"10px 4px"}
      >
        Link Button
      </StyledButton>
    </>
  );
};

export default Button;
