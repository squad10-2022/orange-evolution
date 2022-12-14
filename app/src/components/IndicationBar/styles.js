import styled from "styled-components";
import { orange } from "../../styles/variables";

export const IndicatorBarContainer = styled.div`

  display: flex;
  position: relative;
  justify-content: space-between;
  padding: 16px;
  font-size: 18px;
  color: ${({ theme }) => theme.color1};
  background-color: ${({ theme }) => theme.primary};
`;
