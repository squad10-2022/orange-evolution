import React from "react";
import { HeaderContainer } from "./styles";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <HeaderContainer>
      <img src={Logo}></img>

      <div className="pesquisa">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input type="search" placeholder="Busque o conteúdo desejado"></input>
      </div>
      <a /*href="http://localhost:5174/Home"*/>Home</a>
      <a /*href="/TrailLevels"*/>UX/UI <i class="fa-solid fa-chevron-down"></i></a>
      <a /*href="/TrailLevels"*/>Back-end <i class="fa-solid fa-chevron-down"></i></a>
      <a /*href="/TrailLevels"*/>Front-end <i class="fa-solid fa-chevron-down"></i></a>
      <a /*href="/TrailLevels"*/>Quality Assurance <i class="fa-solid fa-chevron-down"></i></a>
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
