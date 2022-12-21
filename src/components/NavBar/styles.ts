import styled from 'styled-components'
import { colors } from '../../styles/Colors'

// navLogo = NL
// menu = MN
// profile = PF

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: "NL MN PF";
  position: absolute;
  width: 100%;
  height: 80px;
  background: ${colors.firstContainerColor};
  /* background: linear-gradient(90deg, rgba(32,32,32,0) 0%, rgba(32,32,34,1) 10%, rgba(32,32,36,1) 50%, rgba(32,32,36,1) 90%, rgba(32,32,36,0) 100%); */

.NavBar_logo{ 
  grid-area: NL;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  img{
    width: 170px;
  }
}
 
.NavBar_profile{
  grid-area: PF;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

 .ShortMenu{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    padding-right: 30px;
  }
}
`

export const MenuContainer = styled.div`
grid-area: MN;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 150px;
  height: 100%;
  
  .ActiveNavBar{
    cursor: default;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0 10px;
    font: 700 12px 'Roboto';
    color: ${colors.mainTextColor};
  
    text-decoration: none;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0 10px;
    font: 700 12px 'Roboto';
    transition: all .2s ease;
  }

    .UnselectedNavBar {
    cursor: pointer;
    color: ${colors.infoTextColor};
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0 10px;
    font: 700 12px 'Roboto';
    
    :hover{
      color: ${colors.accentTextColor}
      /* ::after {
      z-index: 100;
      position: absolute;
      bottom: -2px;
      content: "";
      height: 2px;
      border-bottom: 2px solid ${colors.actionColor};
      width: 50px;
      } */
    }
    text-decoration: none;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0 10px;
    font: 700 12px 'Roboto';
    transition: all .2s ease;
  }
`

export const NotificationsContainer = styled.div`
width: 200px;
height: 400px;
background: #202024;
border-radius: 4px;
box-shadow: 7px 7px 15px rgba(0, 0, 0, 0.3);
cursor: pointer;
top: 150px;

.before{
  content: "";
  width: 20px;
  height: 20px;
  background: #202024;
  border-radius: 2px;
} 
`

