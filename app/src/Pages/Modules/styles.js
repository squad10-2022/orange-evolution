import styled from "styled-components";

export const ModuleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.bgColor1};

  > div {
    width: 100%;
  }

  .startBody{
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
` 