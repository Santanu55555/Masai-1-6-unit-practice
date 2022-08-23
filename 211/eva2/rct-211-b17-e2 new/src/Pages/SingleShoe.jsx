import React from "react";

const SingleShoe = ({image,name,category}) => {
  return (
    <div>
      <h2>Shoe name: {name}</h2>
      <div>
        <img src={image} alt="Cover Pic" />
      </div>
      <div>
        <div>Shoe-Category:{category}</div>
      </div>
    </div>
  );
};

export default SingleShoe;
