import styled from "styled-components";

export const H2 = styled.h2`
  color: ${({ color, theme }) => color || theme.primary};
  font-size: 32px;
  font-weight: 700;
`;
