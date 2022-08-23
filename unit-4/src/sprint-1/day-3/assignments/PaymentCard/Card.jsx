import React from "react";
import UpperCard from "./UpperCard";
import "./Card.css";
import MiddleCard from "./MiddleCard";
import LowerCard from "./LowerCard";

const Card = ({ color, data }) => {
  return (
    <div className="card" style={{ backgroundColor: color }}>
      <UpperCard {...data} />
      <MiddleCard {...data} />
      <LowerCard {...data} />
    </div>
  );
};

export default Card;
