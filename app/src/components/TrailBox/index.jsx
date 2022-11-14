import React from "react";
import Title from "../Title";
import { TrailBoxContainer } from "./styles";

const TrailBox = ({ title, evolution, summary, concluido }) => {
  return (
    <TrailBoxContainer concluido={concluido} evolution={evolution}>
      <div className="left-body">
        <Title color="white">{title}</Title>
        <div className="porcentagem-wrapper">
          {evolution}% completo
          <div className="barra">
            <div className="porcentagem"></div>
          </div>
        </div>
        {!!evolution && (
          <div className="flag">{concluido ? "Concluído" : "Em andamento"}</div>
        )}
      </div>
      <div className="right-body">
        <p>O que você irá aprender:</p>
        <ul>
          {summary.map((summary) => (
            <li> {summary}</li>
          ))}
        </ul>
      </div>
    </TrailBoxContainer>
  );
};

export default TrailBox;
