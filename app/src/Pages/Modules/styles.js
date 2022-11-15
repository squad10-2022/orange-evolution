import styled from "styled-components";

export const ModuleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.bgColor1};

  > div {
    width: 100%;
  }

  .navLink{
    display: flex;
    justify-content: flex-start;
    color: ${({ theme }) => theme.color1};
    font-size: 20px;
    font-weight: 400;
    padding: 2% 0% 0% 2%
  }
  
  .title{ 
    font-size: 20px;
    font-weight: 600;
    padding: 0% 0% 0% 2%
  }

  .startBody{
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 32px;
  }

  .wrapperModules{
    display: flex;
    flex-direction: column;
  
  }
` 