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

  .btn{
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


.col-1 {width: 8.33%;}
.col-2 {width: 16.66%;}
.col-3 {width: 25%;}
.col-4 {width: 33.33%;}
.col-5 {width: 41.66%;}
.col-6 {width: 50%;}
.col-7 {width: 58.33%;}
.col-8 {width: 66.66%;}
.col-9 {width: 75%;}
.col-10 {width: 83.33%;}
.col-11 {width: 91.66%;}
.col-12 {width: 100%;}

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  [class*="col-"] {
    width: 100%;
  }
}

`;