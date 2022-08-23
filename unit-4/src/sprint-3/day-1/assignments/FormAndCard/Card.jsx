import React from "react";
import { CardDiv, CardFlexDiv, Para, ShadowDiv, VisaCard } from "./Main.styled";
import Chip from "./Chip.png";

const Card = ({ name, cardNo, month, year, cvc }) => {
  let num = "";
  if (cardNo) {
    for (let i = 0; i < cardNo.length; i++) {
      i === 3 || i === 7 || i === 11
        ? (num += cardNo[i] + " ")
        : (num += cardNo[i]);
    }
  }
  return (
    <CardDiv>
      <VisaCard>
        <h2 className="visa">VISA</h2>
        <img src={Chip} alt="card" />
        <p className="number">{num}</p>
        <CardFlexDiv>
          <div>
            <Para>CARD HOLDER</Para>
            <h5>{name}</h5>
          </div>
          <div>
            <Para>EXPIRY</Para>
            <h5>
              {month}/{year}
            </h5>
          </div>
          <div>
            <Para>CVC</Para>
            <h5>{cvc}</h5>
          </div>
        </CardFlexDiv>
      </VisaCard>
      <ShadowDiv>
        <div className="stripe"></div>
      </ShadowDiv>
    </CardDiv>
  );
};

export default Card;
