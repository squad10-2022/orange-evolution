import React from "react";
import Header from "../../components/Header";
import { ModuleContainer } from "./styles";
import ModulesBox from "../../components/ModulesBox";
;


const Modules = () => {
    return (
        <ModuleContainer>
        <div>
          <div className="startBody">
            <Header />
            <ModulesBox>

            </ModulesBox>
          </div>
        </div>
      </ModuleContainer>
    );
};

export default Modules;
