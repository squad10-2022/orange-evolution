import React from "react";
import { HeaderContainer } from "./styles";
import Logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <HeaderContainer>
      <img src={Logo}></img>
      <div className="pesquisa">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input type="search" placeholder="Busque o conteúdo desejado"></input>
      </div>
      <a>Home</a>
      <a>UX/UI</a>
      <a>Back-end</a>
      <a>Front-end</a>
      <a>Quality Assurance</a>
      <a>
        <i className="fa-regular fa-bell"></i>
      </a>
      <a>
        <i className="fa-regular fa-user"></i>
      </a>
    </HeaderContainer>
  );
};

export default Header;
