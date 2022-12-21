import styled from 'styled-components'

import {colors} from '../../styles/Colors'

const ColumnSize: string = "280px"

export const Container = styled.div`
@keyframes gradientAnim {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;

  .UserCover{
    display: flex;
    width: 100%;
    height: 300px;
    background-size: 300% 300%;
    background: linear-gradient(60deg, #8472CB, #6B53CD, #6B53CD, #4354AC, #6B53CD, #8153CD, #AD53CD);
    animation: gradientAnim 3s ease alternate infinite;
  }
  .TitleSection{
        display: flex;
        width: 100%;
        height: 45px;
        align-items: center;
        justify-content: space-between;
        padding: 8px 24px 0 24px;

        
      }
  
  .EditBtnContainer{
     display: flex;
     justify-content: end;
     /* border: 2px solid #B62737; */
     width: 100%;
     height: fit-content;
    /* :before{
      display: flex;
      align-content: center;
      content: "";
      width: 100%;
      height: 3px;
      background-color: #B62737;
    } */
   }
  `
  export const Content = styled.div`
  display: flex;
  flex-direction: row;
  width: 850px;
  height: 100%; 
 /* Capa do perifl do usuário */
 .LeftColumn{ 
    display: flex;
    flex-direction: column;
    width: fit-content;
   }
   .RightColumn{
     display: flex;
     flex-direction: column;
     width: 100%;
     padding-left: 20px; 
     .ProfileCertificationsBox{
       margin-top: 20px;
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 100%;
      height: 150px;
      background-color: ${colors.firstContainerColor};
      border-radius: 5px;
      
      .Content{
        padding-left: 10px;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        overflow: auto;
      }
    
     }
     .ProfileClientsBox, .ProfileAccessBox{
       margin-top: 20px;
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 100%;
      height: 150px;
      background-color: ${colors.firstContainerColor};
      border-radius: 5px;
     }
     .ProfileAccessBox{
      .SkillBox{
        display: flex;
        width: 100%;
        padding-inline: 14px;
        justify-content: center;
        gap: 2px;
      }
     }
     .ProfileActionsBox{
      margin-top: 20px;
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 100%;
      height: 150px;
      background-color: ${colors.firstContainerColor};
      border-radius: 5px;
      .UserInfoBox{
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        gap: 8px;
        width: 100%;
        height: 100%;
        padding-left: 24px;
        .UserInfoLine{
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex: 1 1 200px;
          width: 100%;
          height: 36px;
        }
  
      }
     }
   }
 .MainProfileBox{
   display: flex;
   align-items: center;
   flex-direction: column;
   width: ${ColumnSize};
   height: 410px;
   background-color: ${colors.firstContainerColor};
   border-radius: 5px;
   margin-top: -70px;
      h1{
     margin-top: 20px;
      font: 700 14px 'Roboto';
      color: ${colors.mainTextColor};
    }
    h2{
     margin-top: 5px;
      font: 700 12px 'Roboto';
      color: ${colors.infoTextColor};
    }
    .StampBox{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 130px;
    }
    .UserActiveInfo{
      width: 100%;
      height: 80px;
      display: flex;
      justify-content: center;
      align-items: center;
      font: 500 12px 'Roboto';
      color: ${colors.infoTextColor};
    }
    #divider{
      width: 100%;
      border: 1px solid ${colors.bgDarkColor};
    }
   > .ImgContainer{
     display: flex;
     align-items: flex-end;
     margin-top: 40px;
    width: 110px;
    height: 110px;
    background-color: ${colors.firstContainerColor};
    border-radius: 5px;
    box-shadow: 5px 4px 15px rgba(0, 0, 0, 0.25);
    img{
      width: 100%;
      height: 100%;
      border-radius: 5px;
     }
  }
 }
 .DgxBox{
  display: flex;
   flex-direction: column;
   width: ${ColumnSize};
   height: 150px;
   background-color: ${colors.firstContainerColor};
   border-radius: 5px;
   margin-top: 20px;

   .BoxContent{
    display: flex;
    justify-content: center;
    width: 100%;
    padding-bottom: 18px;
    padding-left: 18px;
   }

   .CoinInfo{
    display: flex;
    flex-direction: column;
    justify-content: center;
   }
 }
 .ProfileStamps{
   display: flex;
   justify-content: center;
   width: ${ColumnSize};
   height: 150px;
   background-color: ${colors.firstContainerColor};
   border-radius: 5px;
   margin-top: 20px;
 }
`
export const MainBoxes = styled.div`
   display: flex;
  flex-direction: column;
  width: 850px;
  height: 100%;
`

export const ChangeImgIcon = styled.div`
  display: flex;
  align-items: flex-end;
  margin-left: -16px;
  margin-bottom: -12px;
  border-radius: 24px;
  cursor: pointer;
  padding: 6px;
  width: fit-content;
  height: fit-content;
  position: relative;
  background-color: ${colors.actionColor};
`

export const EditIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: fit-content;
  margin-right: -18px;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  :hover{
    background-color: ${colors.secondContainerColor};
  }
`