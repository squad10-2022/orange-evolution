import styled from "styled-components";

export const TrailBoxContainer = styled.div`
  display: flex;
  position: relative;
  padding: 32px;
  border-radius: 24px;
  border: 1px solid ${({ theme }) => theme.primary};
  background-color: transparent;

  .flag {
    position: absolute;
    left: 0;
    top: 32px;
    color: ${({ theme }) => theme.bgColor1};
    border-radius: 0 100px 100px 0;
    background-color: ${({ concluido, theme }) =>
      concluido ? "green" : theme.secondary};
    padding: 2px 8px;
    font-size: 14px;
  }

  .left-body,
  .right-body {
    width: 100%;
    color: ${({ theme }) => theme.color1};
  }

  .left-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 60px;

    .barra {
      position: relative;
      width: 35%;
      height: 10px;
      border: 1px solid ${({ theme }) => theme.primary};
      border-radius: 48px;

      .porcentagem {
        position: absolute;
        height: 100%;
        background-color: ${({ theme }) => theme.primary};
        width: ${({ porcentagem }) => `${porcentagem}%`};
      }
    }
  }

  .right-body {
    li,
    p {
      margin-bottom: 8px;
    }
    p {
      font-size: 24px;
    }
  }
`;
