import React from "react";
import Header from "../../components/Header";
import orangeLogo from "../../assets/images/orange-logo1.png";
import BoxLogin from "../../components/BoxLogin";
import { ModuleContainer } from "./styles";
import { IndicatorBarContainer } from "../../components/IndicationBar/styles";


const Modules = () => {
    return (
        <ModuleContainer>
        <div>
          <div className="startBody">
            <Header />
          <IndicatorBarContainer>
            <a> UI/UX Design </a>
          </IndicatorBarContainer>
          </div>
        </div>
      </ModuleContainer>
    );
};

export default Modules;
