import React from "react";
import Title from "../Title";
import { TrailModulesContainer } from "./styles";
import { Link } from "react-router-dom";

const TrailModules = ({ title, evolution, summary, concluido }) => {
  return (
    <TrailModulesContainer concluido={concluido} evolution={evolution}>
      <div className="left-body">
        <Title color="white">{title}</Title>
        <div className="porcentagem-wrapper">
          {evolution}% completo
          <div className="barra">
            <div className="porcentagem"></div>
          </div>
        </div>
        <Link to="/Modules">
        {!!evolution  && (
          <div className="flag">{concluido ? "Concluído" : "Em andamento"}</div>
        )}
        </Link>
      </div>
      <div className="right-body">
        <p>Módulos Disponíveis:</p>
        <ul>
          {summary.map((summary, index) => (
            <li key={index}> {summary}</li>
          ))}
        </ul>
      </div>
    </TrailModulesContainer>
  );
};

export default TrailModules;
