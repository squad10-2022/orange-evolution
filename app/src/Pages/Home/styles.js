import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.bgColor1};
  
  > div {
    max-width: 1240px;
    width: 100%;
    gap: 32px;
  }
  
  .welcomeName{
    display: flex;
    align-items: start;
    width: 80%;
    line-height: 600%;
  }

  .titleName {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 60px;
  }

`;
