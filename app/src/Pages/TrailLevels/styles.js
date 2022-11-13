import styled from "styled-components";

export const TrailLevelsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.bgColor1};
  

  > div {
    max-width: 1240px;
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
    gap: 32px;
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
