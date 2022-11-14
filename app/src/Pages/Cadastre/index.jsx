import React from "react";
import orangeLogo from "../../assets/images/orange-logo1.png";
import BoxCadastre from "../../components/BoxCadastre";
import { CadastreContainer } from "./styles";

const Cadastre = () => {
  return (
    <CadastreContainer>
      <div>
        <div className="startBody">
          <img src={orangeLogo} />
        </div>
      <BoxCadastre />
      </div>
    </CadastreContainer>
  );
};

export default Cadastre;