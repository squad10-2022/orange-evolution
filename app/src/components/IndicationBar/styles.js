import styled from "styled-components";

export const IndicatorBarContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  padding: 20px 24px;
  width: 100%; 
  background-color: solid ${({ theme }) => theme.primary};
  cursor: pointer;
`;
