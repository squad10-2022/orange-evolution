import React from "react";
import Title from "../../components/Title";
import TrailBox from "../../components/TrailBox";
import Header from "../../components/Header";
import { listaDeCursos } from "../../mocker/constants";
import { HomeContainer } from "./styles";

const Home = () => {
  return (
    <HomeContainer>
      <div>
        <Header />
        <div className="titleName">
          <Title color="white">Bem-vindo, Rodrigo</Title>
          <Title size="md" color="white">
            Escolha a trilha que deseja estudar
          </Title>
          <div className="wrapper"></div>
          {listaDeCursos.map((curso) => {
            return (
              <TrailBox
                tituloDoCurso={curso.modalidade}
                concluido={curso.concluido}
                porcentagem={curso.porcentagem}
                topicos={curso.topicos}
              />
            );
          })}
        </div>
      </div>
    </HomeContainer>
  );
};

export default Home;
