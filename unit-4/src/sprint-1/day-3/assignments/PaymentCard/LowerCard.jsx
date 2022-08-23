import React from "react";

const LowerCard = ({ subheading }) => {
  return (
    <div className="lowCard">
      <p>{subheading}</p>
      <i>&rarr;</i>
    </div>
  );
};

export default LowerCard;
