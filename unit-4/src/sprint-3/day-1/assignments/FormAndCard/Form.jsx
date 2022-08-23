import React from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Button, FlexDiv, FormDiv, LabelDiv, ShortDiv } from "./Main.styled";

const Form = ({ data, setData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <>
      <FormDiv>
        <h2>Payment Details</h2>
        <br />
        <form onSubmit={handleSubmit}>
          <label>CARDHOLDER NAME</label>
          <LabelDiv>
            <AccountCircleOutlinedIcon />
            <input type="text" name="name" onChange={handleChange} required />
          </LabelDiv>
          <br />
          <label>CARD NUMBER </label>
          <LabelDiv>
            <CreditCardOutlinedIcon />
            <input
              type="text"
              name="cardNo"
              onChange={handleChange}
              maxLength={16}
              max={16}
              required
            />
          </LabelDiv>
          <br />
          <FlexDiv>
            <ShortDiv>
              <label>EXPIRY MONTH </label>
              <LabelDiv>
                <DateRangeOutlinedIcon />
                <input
                  type="text"
                  maxLength={2}
                  name="month"
                  onChange={handleChange}
                  required
                />
              </LabelDiv>
            </ShortDiv>

            <ShortDiv>
              <label>EXPIRY YEAR </label>
              <LabelDiv>
                <DateRangeOutlinedIcon />
                <input
                  type="text"
                  maxLength={2}
                  name="year"
                  onChange={handleChange}
                  required
                />
              </LabelDiv>
            </ShortDiv>

            <ShortDiv>
              <label>CVC </label>
              <LabelDiv>
                <LockOutlinedIcon />
                <input
                  type="text"
                  maxLength={3}
                  name="cvc"
                  onChange={handleChange}
                  required
                />
              </LabelDiv>
            </ShortDiv>
          </FlexDiv>
          <br />
          <FlexDiv>
            <p>Payment amount:</p> <span>12300</span>
          </FlexDiv>
          <br />

          <Button type="submit" value="PAY" />
        </form>
      </FormDiv>
    </>
  );
};

export default Form;
