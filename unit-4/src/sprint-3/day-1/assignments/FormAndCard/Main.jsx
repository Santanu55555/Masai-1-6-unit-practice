import React, { useState } from "react";
import Card from "./Card";
import Form from "./Form";
import { MainStyled } from "./Main.styled";
import "./Main.css";

const Main = () => {
  const [data, setData] = useState({});
  return (
    <MainStyled>
      <Card {...data} />
      <Form data={data} setData={setData} />
    </MainStyled>
  );
};

export default Main;
