import React from "react";

const UpperCard = ({ date, logo }) => {
  return (
    <>
      <div className="upperCard">
        <p>{date}</p>
        <img src={logo} alt="logo" />
      </div>
    </>
  );
};

export default UpperCard;
