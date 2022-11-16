import styled from "styled-components";

export const ModuleBoxContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  font-size: 32px;
  width: 100%;
  background-color: transparent;
  transition: all 0.2s ease-in-out;
  border-bottom: 4px solid ${({ theme }) => theme.lbColor2};
  padding: 6% 2% 6% 2%;

  > div {
    width: 100%;
  }

  button{
   
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.color1};
    cursor: pointer;
  }

  .content-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }

  .title-content {

    #textButton {
      background: none;
      border: none;
      font-size: 24px;
      color: ${({ theme }) => theme.color1};
    }
    
    #textButton:hover {
      color: ${({ theme }) => theme.primary};
    }
  }

  .trail-content {
    display: flex;
    flex-direction: column;

    .containerText {
      display: flex;
      font-size: 20px;
    }

    .container-list {
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: space-between;
      margin-top: 5%;
      text-align: left;
      font-size: 18px;
      color: ${({ theme }) => theme.color1};
    }

    .containerLink {
      display: flex;
    }

    .left-content {
      display: flex;
      gap: 16px;
    }
    .containerClassName {
      display: flex;
      gap: 12px;
    }

    .wrapperIcons {
      display: flex;
      justify-content: space-between;
      gap: 48px;
    }
  }

  .divVideo{
    display: ${({ isClose }) => isClose && "none"};
 
  }


`;