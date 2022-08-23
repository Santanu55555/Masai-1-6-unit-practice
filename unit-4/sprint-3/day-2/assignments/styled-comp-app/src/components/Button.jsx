import styled, { css } from "styled-components";

const Button = styled.button`
  white-space: normal;
  padding: 10px;
  border: none;
  background-color: transparent;
  font-weight: 600;
  margin-right: 20px;
  ${(props) =>
    props.primary &&
    css`
      background-color: #2490fe;
      color: white;
    `}
  ${({ def }) =>
    def &&
    css`
      border: 1px solid lightgray;
    `}
    ${({ dashed }) =>
    dashed &&
    css`
      border: 1px dashed lightgray;
    `}
    ${({ text }) =>
    text &&
    css`
      border: none;
    `}
    ${({ link }) =>
    link &&
    css`
      color: #2490fe;
    `}
`;

export { Button };
