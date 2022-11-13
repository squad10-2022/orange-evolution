import React from "react";
import { BoxLoginContainer } from "./styles";

const BoxLogin = () => {
  return (
    <BoxLoginContainer>
      <div>
        <div className="wrapperLogin">
          <a className="phraseLogin">Faça login na sua conta para começar!</a>
          <input type="text" placeholder="  E-mail"></input>
          <input type="password" placeholder="  Senha"></input>
          <a className="forgotPassword">Esqueceu sua senha?</a>
          <button type="submit">ENTRAR</button>
          <a className="cadastreText">Não tem conta? Cadastre-se aqui</a>
        </div>
      </div>
    </BoxLoginContainer>
  );
};

export default BoxLogin;
