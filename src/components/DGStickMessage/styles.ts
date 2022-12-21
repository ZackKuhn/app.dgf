import styled, {css} from "styled-components"

import { colors } from '../../styles/Colors'

export const Container = styled.div`

@keyframes StickAppear {
  0%{
    transform: translateX(50px);
    background-color: ${colors.thirdContainerColor};
  }
  100%{
    transform: translateX(0px);
    background-color: ${colors.secondContainerColor};
  }
}

animation: StickAppear .3s ease;
z-index: 99999;
position: absolute;
right: 70px;
bottom: 70px;
display: Flex;
width: 300px;
border-radius: 8px;
height: 88px;
background-color: ${colors.secondContainerColor};

::after{
  content: '';
  position: absolute;
  right: -8px;
  top: 36px;
  width: 15px;
  height: 15px;
  transform: rotate(45deg);
  background-color: ${colors.secondContainerColor};
}
`
export const MessageBox = styled.div`
display: Flex;
flex: 1;
height: 100%;
align-items: center;
padding: 12px;
`
export const IconBox = styled.div`
display: Flex;
align-items: center;
justify-content: flex-end;
flex: .2;
height: 100%;
`

export const BarTimer = styled.div`

  position: absolute;
  display: flex;
  width: 100%;
  height: 12px;
  bottom: 0px;

  .TimeBarStick{
  display: flex;
  width: 100%;
  height: 100%;
  background-color: ${colors.tableHoveredRow};
  }

  .progressiveBarStick{
    animation: BarTimerInStickMessAnim 3s;
    display: flex;
    width: 0;
    height: 100%;
    background-color: ${colors.activatedColor};
  }

  @keyframes BarTimerInStickMessAnim {
  0%{
    width: 400px;
  }
  100%{
    width: 0;
  }
}
  
`

