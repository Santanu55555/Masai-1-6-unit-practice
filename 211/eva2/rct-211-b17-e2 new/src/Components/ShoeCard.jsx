import React from "react";

const ShoeCard = ({id,name,image,category}) => {
  let shoeId = {id};
  return (
    <div data-cy={`shoe-card-wrapper-${shoeId}`}>
      <div>
        <img style={{width:"300px",height:"300px"}}data-cy="shoe-card-image" src={image} alt="" />
      </div>
      <div>
        <div data-cy="shoe-name" >{name}</div>
        <div data-cy="shoe-category">{category}</div>
      </div>
    </div>
  );
};

export default ShoeCard;
