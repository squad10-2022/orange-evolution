import React from "react";
import { HeaderContainer } from "./styles";
import Logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <HeaderContainer>
      <img src={Logo}></img>
      <input type="search" placeholder="Busque o conteúdo desejado"></input>
      <a>Home</a>
      <a>UX/UI</a>
      <a>Back-end</a>
      <a>Front-end</a>
      <a>Quality Assurance</a>
      <i className="fa-regular fa-bell"></i>
      <i className="fa-regular fa-user"></i>
    </HeaderContainer>
  );
};

export default Header;
