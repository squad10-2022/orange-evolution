import styled from "styled-components";
import { orange } from "../../styles/variables";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;

  background-color: ${({ theme }) => theme.bgColor1};
  color: ${({ theme }) => theme.color1};

  input {
    position: relative;
    padding: 4px;
    border-radius: 12px;
    outline: none;
    border: 1px solid ${({ theme }) => theme.color1};
    min-width: 312px;
    background-color: transparent;
    text-align: center;
    color: ${({ theme }) => theme.color1};

    &::before {
      content: "\f002";
      position: absolute;
      left: 0;
      color: ${({ theme }) => theme.color1};
      font-weight: 900;
    }
  }

  a {
    cursor: pointer;

    &:hover {
      color: ${orange};
    }
  }
`;
