import React from "react";
import Title from "../../components/Title";
import TrailBox from "../../components/TrailBox";
import { TrailLevelsContainer } from "./styles";
import { listaDeModulos } from "../../mocker/modules";
import { TrailBoxContainer } from "../../components/TrailBox/styles";

const TrailLevels = () => {
  return (
    <TrailLevelsContainer>
      <div>
        <Title>Escolha o nível que deseja estudar</Title>
        <p>
          Recomendamos estudar na ordem descrita, porém você pode estudar da
          forma que achar melhor!
        </p>
        <div className="wrapper"> 
            {listaDeModulos.map((modulo) => {
            return (
                <TrailBox
                tituloDoCurso={modulo.nivel}
                concluido={modulo.concluido}
                porcentagem={modulo.porcentagem}
                topicos={modulo.topicos}
                />
            );
            })}
        </div>
      </div>
    </TrailLevelsContainer>
  );
};

export default TrailLevels;
