import styled from "styled-components";

export const HeroSection = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${({ color }) => color};
`;
export const SVG = styled.div`
  height: 90px;
  background: linear-gradient(180deg, #679cf6 0%, #4072ee 100%);
  box-shadow: ${({ shadow }) => shadow};
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`;

export const SideDiv = styled.div`
  height: 100vh;
  width: 90px;
  background-color: ${({ color }) => color};
  display: flex;
  box-shadow: ${({ shadow }) => shadow};
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const FlexDiv = styled.div`
  display: flex;
  width: 120px;
  flex-direction: column;
`;

export const NavDiv = styled.div`
  position: fixed;
  top: 20px;
  left: 140px;
  display: flex;
  align-items: center;
  color: ${({ color }) => color};
`;

export const CardDiv = styled.div`
  position: absolute;
  top: 120px;
  left: 140px;
  width: 500px;
  background-color: #fff;
  border-radius: 12px;
  padding-top: 10px;
  color: ${({ color }) => color};
  background: ${({ bgcolor }) => bgcolor};
`;

export const UserDiv = styled.div`
  padding: 20px;
  border-bottom: ${({ color }) => `2px solid ${color}`};
`;
