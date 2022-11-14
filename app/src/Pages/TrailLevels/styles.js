import styled from "styled-components";

export const TrailLevelsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.bgColor1};
  

  > div {
    width: 100%;
  } 

  .wrapperTrail {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .levelTitle {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    padding: 6% 0% 0% 0%;
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

  p {
    display: flex;
    justify-content: center;
    color: ${({ theme }) => theme.color1};
    font-size: 16px;
    font-weight: 400;
  }

  .wrapperModules {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
    gap: 24px;
  }
`;
