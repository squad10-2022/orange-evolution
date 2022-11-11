import React from "react";
import Title from "../Title";
import { TrailBoxContainer } from "./styles";

const TrailBox = ({ tituloDoCurso, porcentagem, topicos, concluido }) => {
  return (
    <TrailBoxContainer concluido={concluido} porcentagem={porcentagem}>
      <div className="left-body">
        <Title color="white">{tituloDoCurso}</Title>
        <div>
            {porcentagem}% completo
            <div className="barra">
                <div className="porcentagem">
                </div>
            </div>
        </div>
        <div className="flag">{concluido ? "concluido" : "em andamento"}</div>
      </div>

      <div className="right-body">
        <p>O que você irá aprender:</p>
        <ul>
          {topicos.map((topico) => (
            <li>• {topico}</li>
          ))}
        </ul>
      </div>
    </TrailBoxContainer>
  );
};

export default TrailBox;
