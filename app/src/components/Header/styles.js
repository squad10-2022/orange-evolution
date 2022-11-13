import styled from "styled-components";
import { orange } from "../../styles/variables";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  background-color: ${({ theme }) => theme.bgColor1};
  color: ${({ theme }) => theme.color1};

  .pesquisa{
    display: flex;
    position: relative;
    padding: 4px;
    border-radius: 12px;
    outline: none;
    border: 1px solid ${({ theme }) => theme.color1};
    min-width: 312px;
    background-color: transparent;

    input{
      display:flex;
      position: relative;
      text-align: center;
      background-color: transparent;
      width: 100%
    }

  input::before {
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    content: "\f007";
      position: absolute;
      left: 0;
      z-index: 999;
    }
  }

  a {
    cursor: pointer;

    &:hover {
      color: ${orange};
    }
  }
`;
