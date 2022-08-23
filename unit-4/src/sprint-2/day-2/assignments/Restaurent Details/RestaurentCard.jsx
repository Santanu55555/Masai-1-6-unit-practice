import React from "react";

const RestaurentCard = ({
  category,
  total_votes,
  total_reviews,
  total_cost,
  payment_methods,
  url,
  rating,
  name,
}) => {
  const { card, cash, upi } = payment_methods;

  return (
    <div className="res_card">
      <div className="upperCard">
        <img src={url} alt={url} />
        <div className="details">
          <h2>{name}</h2>
          <p className="muted_text">{category}</p>
          <p className="muted_text">{`Cost ₹${total_cost} for one`}</p>
          <p>Min ₹50 Up to 30 min </p>
          <p>
            Accepts
            {card && cash && upi
              ? " all payments"
              : cash && card
              ? " cash & card payments only"
              : cash
              ? " cash payments only"
              : card
              ? " card payments only"
              : " upi payments only"}
          </p>
        </div>
        <div className="right_card">
          <h3>{rating}</h3>
          <p>{total_votes} votes</p>
          <p>{total_reviews} reviews</p>
        </div>
      </div>
      <div className="lowerCard">
        <div></div>
        <button>Order online</button>
      </div>
    </div>
  );
};

export default RestaurentCard;
