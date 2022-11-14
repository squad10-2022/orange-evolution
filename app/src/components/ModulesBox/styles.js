import styled from "styled-components";

export const ModuleBoxContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  font-size: 32px;
  width: 100%;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border-bottom: 4px solid ${({ theme }) => theme.lbColor2};
  padding: 6% 2% 6% 2%;
`;
