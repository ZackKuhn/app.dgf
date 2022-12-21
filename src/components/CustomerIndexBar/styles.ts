import styled from 'styled-components';

import {colors} from '../../styles/Colors' 

export const Container = styled.div`
@keyframes CustomerBoxEntry {
  0%{
    transform: translateY(-20px);
  }
  100%{
    transform: translateY(0);
  }
}
  animation: CustomerBoxEntry .3s ease;
  width: 100%;
  height: 200px;
  display: flex;
  background: linear-gradient(180deg, ${colors.bgDarkColor}, ${colors.firstContainerColor} 100%);
  border-radius: 7px;
`;

// Nav = AN
// Items = AI
// Options = AO

export const Content = styled.div`
display: grid;
grid-template-columns: 1fr 200px;
grid-template-rows: 70px 1fr;
grid-template-areas: "AN AN" "AI AO";
width: 100%;
height: 100%;

.ActionNavBar{
  grid-area: AN;
  display: flex;
  justify-content: space-between;
  align-content: center;
  .LeftSide{
    display: flex;
    padding-left: 40px;
    align-items: center;
    width: 100%;
  }
  .RightSide{
    width: 70px;
    display: flex;
    align-content: center;
    justify-content: center;
    padding: 10px 15px 0 0;
  }
  #ActionTitleBox{
    font-size: 16px;
    color: white;
    padding-right: 10px;
  }
}
  .ActionItems{
    grid-area: AI;
    display: flex;
    border-top: 1px solid #141417;
    padding-left: 36px;
    overflow-x: visible;
  }
  
  .ActionOptions{
    grid-area: AO;
    border-top: 1px solid #141417;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
`