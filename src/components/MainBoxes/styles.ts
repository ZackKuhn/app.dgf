import styled from 'styled-components'

import {colors} from '../../styles/Colors'

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
height:  fit-content;
`;

// img = Profile Image
// inf = User infos
// lvl = Profile Level


export const ProfileBox = styled.div`
@keyframes entryProfileBox {
  0%{
      transform: translateX(-20px);
  }
  100%{
    transform: translateY(0);
  }
}
animation: entryProfileBox .7s ease;
display: grid;
grid-template-columns: 180px 1fr;
grid-template-rows: 1fr 110px;
grid-template-areas: "img inf" "lvl lvl";
width: 50%;
height: 280px;
margin: 10px;
background: ${colors.firstContainerColor};  
border-radius: 7px;

.ProfileImg{
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: img;
  > .ImgContainer{
    width: 110px;
    height: 110px;
    background: ${colors.bgDarkColor};
    border-radius: 4px;
    box-shadow: 5px 4px 15px rgba(0, 0, 0, 0.25);
    img{
      width: 100%;
      height: 100%;
      border-radius: 5px;
     }
  }
}
.ProfileInfo{
  grid-area: inf;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  
  .ProfileName{
    font: 700 16px 'Roboto';
    color: ${colors.mainTextColor}; 
  }
  .ProfileDescription{
    font: 500 12px "Roboto"; 
    color: ${colors.infoTextColor};
    padding-right: 20px;
  }
}
.ProfileLevel{
  grid-area: lvl;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #141417;
}
`;

// IconBox  = IB
// DataBox  = DB
// BtnBox  = BB

export const NextTask = styled.div`
@keyframes entryRightBox {
  0%{
      transform: translateX(20px);
  }
  100%{
    transform: translateY(0);
  }
}

animation: entryRightBox .7s ease;
display: grid;
grid-template-columns: 60% 1fr;
grid-template-rows: 1fr 1fr;
grid-template-areas: "IB DB" "BB BB";
align-items: center;
justify-content: center;
width: 50%;
height: 280px;
margin: 10px;
background-color: ${colors.firstContainerColor};
background-size: cover; 
border-radius: 7px;
padding-left: 24px;
.IconBox{
  width: 100%;
  height: 100%;
  grid-area: IB;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  .Description{
    margin-left: 10px;
    h2{
      font: 700 12px 'Roboto';
      color: #5A5A62;
    }
  }
}
.DataBox{
  width: 100%;
  height: 100%;
  grid-area: DB;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 10px;
  
  .ChekinDate, .ChekinHour{
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 4px;
  }
}
.ChekinDate{
  margin-bottom: 4px;
}
.BtnBox{
  display: flex;
  justify-content: end;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  grid-area: BB;
  padding: 30px;
}
`;

export const ProfileButton = styled.div`
margin-top: 10px;
`;

