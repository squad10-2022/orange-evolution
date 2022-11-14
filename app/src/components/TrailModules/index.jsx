import React from "react";
import Title from "../Title";
import { TrailModulesContainer } from "./styles";

const TrailModules = ({ title, evolution, summary, concluido }) => {
  return (
    <TrailModulesContainer concluido={concluido} evolution={evolution}>
      <div className="left-body">
        <Title color="white">{title}</Title>
        <div className="porcentagem-wrapper">
          {evolution}% completo
          <div className="barra">
            <div className="evolution"></div>
          </div>
        </div>
        {!!evolution  && (
          <div className="flag">{concluido ? "Concluído" : "Em andamento"}</div>
        )}
      </div>

      <div className="right-body">
        <p>Módulos Disponíveis:</p>
        <ul>
          {summary.map((summary) => (
            <li> {summary}</li>
          ))}
        </ul>
      </div>
    </TrailModulesContainer>
  );
};

export default TrailModules;
