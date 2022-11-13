import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.bgColor1};
  
  > div {
    max-width: 1240px;
    width: 100%;
  }
  
  .titleName {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    text-align: left;
    gap: 24px;
  }
`;
