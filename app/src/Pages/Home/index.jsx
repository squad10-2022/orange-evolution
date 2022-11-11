import React from "react";
import TrailBox from "../../components/TrailBox";
import { listaDeCursos } from "../../mocker/constants";
import { HomeContainer } from "./styles";

const Home = () => {
  return (
    <HomeContainer>
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
    </HomeContainer>
  );
};

export default Home;
