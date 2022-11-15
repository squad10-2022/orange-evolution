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
          <div className="welcomeName">
            <Title color="white">Bem-vindo, Rodrigo</Title>
          </div>
          <Title size="md" color="white">
            Escolha a trilha que deseja estudar
          </Title>
          {listaDeCursos.map((curso, index) => { 
            return ( 
              <TrailBox key={index}
                 title={curso.title}
                concluido={curso.concluido}
                evolution={curso.evolution}
                summary={curso.summary}
              />
               
            );
          })}
        </div>
      </div>
    </HomeContainer>
  );
};

export default Home;
