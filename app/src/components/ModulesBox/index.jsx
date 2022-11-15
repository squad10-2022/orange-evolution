import React from "react";
import Title from "../Title";
import { ModuleBoxContainer } from "./styles";

const ModulesBox = ({ title }) => {
  return (
    <ModuleBoxContainer>
      <div>
        <div className="left-body">
          <Title color="white" size="md">
            {title} <i class="fa-solid fa-chevron-down"></i>
          </Title>
          <div className="right-body">
          </div>
        </div>
      </div>
    </ModuleBoxContainer>
  );
};

export default ModulesBox;
