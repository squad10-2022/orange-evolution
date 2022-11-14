import React from "react";
import Title from "../../components/Title";
import { TrailLevelsContainer } from "./styles";
import { listaDeModulos } from "../../mocker/modules";
import TrailModules from "../../components/TrailModules";
import Header from "../../components/Header";
import { IndicatorBarContainer } from "../../components/IndicationBar/styles";

const TrailLevels = () => {
  return (
    <TrailLevelsContainer>
      <div>
        <div className="wrapperTrail">
          <Header />
          <p className="navLink"> Home - UI/UX Design </p>
          <IndicatorBarContainer>
            <a className="title"> UI/UX Design </a>
          </IndicatorBarContainer>
          <div className="levelTitle">
            <Title color="white" size="md">
              Escolha o nível que deseja estudar
            </Title>
            <p>
              Recomendamos estudar na ordem descrita, porém você pode estudar da
              forma que achar melhor!
            </p>
          </div>
        <div className="wrapperModules">
          {listaDeModulos.map((modulo) => {
            return (
              <TrailModules
                title={modulo.level}
                concluido={modulo.concluido}
                evolution={modulo.evolution}
                summary={modulo.summary}
              />
            );
          })}
          </div>
        </div>
      </div>
    </TrailLevelsContainer>
  );
};

export default TrailLevels;
