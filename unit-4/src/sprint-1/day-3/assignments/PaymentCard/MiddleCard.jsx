import React from "react";

const MiddleCard = ({ btn, heading }) => {
  return (
    <div className="midCard">
      <button>{btn}</button>
      <h2>{heading}</h2>
    </div>
  );
};

export default MiddleCard;
