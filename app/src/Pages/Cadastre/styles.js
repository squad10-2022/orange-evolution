import styled from "styled-components";

export const CadastreContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.bgColor1};
  width: 100%;
  height: 100vh;

  > div {
    max-width: 1240px;
    width: 100%;
    display: flex;
    align-items: center;
  }

  .startBody {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${({ theme }) => theme.color1};
    text-align: start;
    width: 100%;
    gap: 40px;

  }
`;