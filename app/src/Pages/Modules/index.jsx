import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { IndicatorBarContainer } from "../../components/IndicationBar/styles";
import ModulesBox from "../../components/ModulesBox";
import { contentModules } from "../../mocker/contentM";
import { ModuleContainer } from "./styles";


const Modules = () => {
  return(
    <ModuleContainer>
      <div className="startBody">
        <Header />
        <p className="navLink"> Home - UI/UX Design </p>
        <IndicatorBarContainer>
          <a className="title"> UI/UX Design </a>
        </IndicatorBarContainer>
        <div className="wrapperModules">
          {contentModules.map((modulo, index) => {
            return <ModulesBox key={index} title={modulo.title} 
            summary={modulo.summary} />;
          })}
        </div>
      </div>
    </ModuleContainer>
   );
   };



export default Modules;
