import React from "react";
import { BoxCadastreContainer } from "./styles";

const BoxCadastre = () => {
  return (
    <BoxCadastreContainer>
      <div>
        <div className="wrapperCadastre">
          <a className="phraseCadastre">Cadastre-se</a>
          <div className="alignCadastre">
            <label for="nome"> Nome</label>
            <input type="text" id="name"></input>
            <label for="nome"> E-mail</label>
            <input type="text" id="email"></input>
            <label for="nome"> Senha</label>
            <input type="password" id="password"></input>
            <label for="nome"> Confirmar Senha</label>
            <input type="password" id="confirmpassword"></input>
          </div>
          <button type="submit">CADASTRAR</button>
          <a className="cadastreText">Já tem conta? Entre aqui</a>
        </div>
      </div>
    </BoxCadastreContainer>
  );
};

export default BoxCadastre;
