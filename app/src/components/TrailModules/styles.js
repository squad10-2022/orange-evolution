import styled from "styled-components";

export const TrailModulesContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  padding: 20px 24px;
  border-radius: 24px;
  width: 80%;
  border: 1px solid ${({ theme }) => theme.primary};
  background-color: transparent;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover{
    border: 3px solid ${({ theme }) => theme.primary};
  }

  .flag {
    position: absolute;
    left: 0;
    top: 32px;
    color: ${({ concluido, theme }) => concluido ? "white" : theme.bgColor1};
    border-radius: 0 100px 100px 0;
    background-color: ${({ concluido, theme }) =>
      concluido ? green : theme.secondary};
    padding: 2px 8px;
    font-size: 14px;
    font-weight: 600;
  }

  .left-body,
  .right-body {
    color: ${({ theme }) => theme.color1};
  }

  .left-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    gap: 32px;

    .porcentagem-wrapper{ 
      display: flex;
      align-items: center;
      white-space: nowrap;
      gap: 8px;
      width: 100%;
    }

    .barra {
      position: relative;
      width: 35%;
      height: 10px;
      border: 1px solid ${({ theme }) => theme.primary};
      border-radius: 48px;

      .porcentagem {
        position: relative;
        height: 100%;
        background-color: ${({ theme }) => theme.primary};
        width: ${({ evolution }) => `${evolution}%`};
      }
    }
  }

  .right-body {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    ul,
    li,
    p {
      margin-bottom: 8px;
      width: 100%;
      text-align: left;
      font-size: 18px;
    }

    p {
      text-align: left;
      white-space: nowrap;
      font-size: 24px;
    }
  }
`;
