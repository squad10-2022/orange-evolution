import React from "react";
import Title from "../Title";
import { TrailModulesContainer } from "./styles";

const TrailModules = ({ tituloDoCurso, porcentagem, topicos, concluido }) => {
  return (
    <TrailModulesContainer concluido={concluido} porcentagem={porcentagem}>
      <div className="left-body">
        <Title color="white">{tituloDoCurso}</Title>
        <div className="porcentagem-wrapper">
          {porcentagem}% completo
          <div className="barra">
            <div className="porcentagem"></div>
          </div>
        </div>
        {!!porcentagem  && (
          <div className="flag">{concluido ? "Concluído" : "Em andamento"}</div>
        )}
      </div>

      <div className="right-body">
        <p>Módulos Disponíveis:</p>
        <ul>
          {topicos.map((topico) => (
            <li> {topico}</li>
          ))}
        </ul>
      </div>
    </TrailModulesContainer>
  );
};

export default TrailModules;
