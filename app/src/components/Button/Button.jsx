import styled from "styled-components";
import React from "react";
import { useTheme } from "../../hooks/useTheme";

const SButton = styled.button`
  height: 50px;
  width: 90px;
  border-radius: 8px;
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.color1};
  cursor: pointer;
`;

const Button = () => {
  const { changeTheme } = useTheme();
  return <SButton onClick={changeTheme}>mudar tema</SButton>;
};

export default Button;
