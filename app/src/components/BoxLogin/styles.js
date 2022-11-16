import styled from "styled-components";

export const BoxLoginContainer = styled.div`

  display: flex;
  flex-direction: column;
  text-align: center;
  max-width: 100%;
  padding: 6% 2% 6% 2%;
  background: ${({ theme }) => theme.lbColor2};
  color: ${({ theme }) => theme.color1};
  
  .wrapperLogin{
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 24px;

    .phraseLogin{
    display: flex;
    justify-content: center;
    font-size: 24px;
    font-weight: 600;
  }
  }

  input{
      display:flex;
      position: relative;
      justify-content: center;
      text-align: start;
      background-color: ${({ theme }) => theme.color1};
      border-radius: 24px;
      padding: 8px;
      width: 80%
  }

  button{
  padding: 8px;
  border-radius: 24px;
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.color1};
  width: 250px;
  cursor: pointer;
  }
  
  .forgotPassword{
    display: flex;
    justify-content: start;
    align-items: flex-start;
    font-size: 16px;
    font-weight: 500;
  }

  .cadastreText{
    display: flex;
    justify-content: center;
    font-size: 18px;
    font-weight: 400;
  }

  .cadastreSubText{
    display: flex;
    justify-content: center;
    font-size: 18px;
    font-weight: 400;
    color: ${({ theme }) => theme.primary};
    text-decoration: none;
  }
`;
