import styled from "styled-components";

import { colors } from "../../styles/Colors"; 


interface ProgressiveProps{
  barvalue: number
  weight: 'fit' | 'base' | 'large' 
}

const sizeBar: string = '8px';

export const Container = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 36px;
` 
export const LevelLabel = styled.div`

  @keyframes levelLabelAnim {
    0%{
      margin-top: -16px;
    } 
    100%{
      margin-top: -24px;
    }
  }

  animation: levelLabelAnim .2s ease;
  display: flex;
  width: fit-content;
  position: absolute;
  margin-left: -36x;
  margin-top: -24px;
  border-radius: 4px;
` 
export const BgBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: ${sizeBar};
  background-color: ${colors.bgDarkColor};
  border-radius: 24px;
  `
export const ProgressiveBar = styled.div<ProgressiveProps>`
  display: flex;
  width: ${props => props.barvalue}%;
  height: ${sizeBar};
  border-radius: 12px;
  background: linear-gradient(60deg, #8472CB, #6B53CD, #6B53CD, #4354AC, #6B53CD, #8153CD, #AD53CD);
  animation: animatedgradient 3.5s ease infinite, Prgr 1.2s ease;
  background-size: 300% 300%;

  @keyframes Prgr {
    0% {
      width: 0%;
    }
    30%{
      width: 0%;
    }
    60%{
      width: ${props => props.barvalue + 4}%
    }
    100% {
      width: ${props => props.barvalue}%;
    }
  }
  @keyframes animatedgradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 100%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  `

export const LevelPin = styled.div`
  z-index: 98;
  margin-left: -8px;
  display: flex;
  width: 36px;
  height: ${sizeBar};
  border-radius: 12px;
  background-color: ${colors.actionColor};
  cursor: pointer;
  transition: background-color .3s ease;
  :hover{
    width: 36px;
    background-color: ${colors.accentTextColor};
  }
  ` 
export const LevelTarget = styled.div`
  z-index: 99;
  justify-content: flex-end;
  display: flex;
  height: fit-content;
`