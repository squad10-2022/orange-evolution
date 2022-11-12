import React from "react";
import Title from "../../components/Title";
import TrailBox from "../../components/TrailBox";
import { listaDeCursos } from "../../mocker/constants";
import { HomeContainer } from "./styles";

const Home = () => {
  return (
    <HomeContainer>
      <div>
        <Title>Bem-vindo, Rodrigo</Title>
        <div>
          <Title size="md" color="white">
            Escolha a trilha que deseja estudar
          </Title>
        </div>
        <div className="wrapper">
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
