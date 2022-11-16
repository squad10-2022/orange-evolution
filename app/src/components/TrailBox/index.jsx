import React from "react";
import Title from "../Title";
import { TrailBoxContainer } from "./styles";
import { Link } from "react-router-dom";

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
        <Link to="/TrailLevels">
        {!!evolution && (
          <div className="flag">{concluido ? "Concluído" : "Em andamento"}</div>
        )}
      </Link>

      </div>
      <div className="right-body">
        <p>O que você irá aprender:</p>
        <ul>
          {summary.map((summary, index) => (
            <li key="index">  {summary } </li>
          ))}
        </ul>
      </div>
    </TrailBoxContainer>
  );
};

export default TrailBox;
