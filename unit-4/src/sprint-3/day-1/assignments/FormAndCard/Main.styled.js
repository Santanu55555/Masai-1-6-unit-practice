import styled from "styled-components";

export const MainStyled = styled.div`
  display: flex;
  width: 80%;
  margin: 20px auto;
`;

export const FormDiv = styled.div`
  width: 50%;
  height: 100%;
  padding: 10px;
`;

export const CardDiv = styled.div`
  width: 50%;
  position: relative;
  height: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const LabelDiv = styled.div`
  width: 96%;
  border-bottom: 2px solid #f6425b;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: left;
`;

export const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const ShortDiv = styled.div`
  width: 180px;
  margin-right: 20px;
`;

export const Button = styled.input`
  padding: 10px 60px;
  background-color: #f6425b;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
  border: none;
  outline: none;
  margin-left: 40%;
`;

export const VisaCard = styled.div`
  background: linear-gradient(
    90deg,
    rgba(255, 104, 125, 1) 0%,
    rgba(246, 66, 91, 1) 100%
  );
  width: 400px;
  height: 250px;
  color: #fff;
  border-radius: 12px;
  padding: 30px;
`;

export const CardFlexDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const Para = styled.p`
  font-size: 12px;
  margin-top: 20px;
`;
export const ShadowDiv = styled.div`
  width: 400px;
  height: 250px;
  color: #fff;
  border-radius: 12px;
  position: absolute;
  top: 60px;
  z-index: -1;
  right: 60px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;
