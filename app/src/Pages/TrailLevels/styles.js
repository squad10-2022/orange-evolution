import styled from "styled-components";

export const TrailLevelsContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.bgColor1};

  p {
    color: ${({ theme }) => theme.color1};
    font-size: 18px;
    font-weight: 400;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    text-align: left;
    gap: 24px;
  }
`;
