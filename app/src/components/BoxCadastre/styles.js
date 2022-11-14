import styled from "styled-components";

export const BoxCadastreContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  max-width: 1240px;
  padding: 7% 2%;
  background: ${({ theme }) => theme.lbColor2};
  color: ${({ theme }) => theme.color1};
  width: 80%;

  .wrapperCadastre {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 32px;


    .phraseCadastre {
      display: flex;
      justify-content: center;
      font-size: 32px;
      font-weight: 600;
    }
  }

  .alignCadastre{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
    gap: 12px;
 

  label {
    display: flex;
    align-items: flex-start;
    font-size: 14px;
  }

  input {
    display: flex;
    position: relative;
    justify-content: start;
    background-color: ${({ theme }) => theme.color1};
    border-radius: 24px;
    padding: 8px;
  }
}

  button {
    padding: 8px;
    border-radius: 24px;
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.color1};
    font-weight: 800;
    width: 45%;
    cursor: pointer;
  }

  .cadastreText {
    display: flex;
    justify-content: center;
    font-size: 16px;
    font-weight: 400;
    width: 100%;
    cursor: pointer;
  }
`;
