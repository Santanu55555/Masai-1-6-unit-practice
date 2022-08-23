import styled from "styled-components";

export const StyledButton = styled.button`
  color: ${({ color }) => color};
  background-color: ${({ bgColor }) => bgColor};
  border-radius: ${({ radius }) => radius};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  border: ${({ border }) => `1px ${border} #111`};
`;
