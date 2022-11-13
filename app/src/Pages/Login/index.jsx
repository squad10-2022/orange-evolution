import React from "react";
import orangeLogo from "../../assets/images/orange-logo1.png";
import BoxLogin from "../../components/BoxLogin";
import { LoginContainer } from "./styles";

const Login = () => {
  return (
    <LoginContainer>
      <div>
        <div className="startBody">
          <img src={orangeLogo} />
          <a>
            Explore conhecimentos que estão transformando indústrias, negócios e
            vidas através de trilhas gratuitas em UX/ UI Design, Desenvolvimento
            e QA!
          </a>
        </div>
      <BoxLogin />
      </div>
    </LoginContainer>
  );
};

export default Login;
