import styled, {css} from 'styled-components';
import { colors } from '../../styles/Colors';

interface MainFlagProps {
  bgactive: boolean
}

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    height: fit-content;
`;

export const MainFlagContainer = styled.div<MainFlagProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    height: fit-content;
    padding: 8px;
    border-radius: 8px;
    cursor: pointer;
    :hover{
      background-color: ${colors.firstContainerColor};
    }
    ${props => props.bgactive && css`background-color: ${colors.firstContainerColor};`}
`

export const FlagsPopUp = styled.div`

  @keyframes flagsAppearAnim {
    0%{
      margin-right: -150px;
    }
    20%{
      margin-right: -166px;
    }
    100%{
      margin-right: -162px;
    }
  }
  animation: flagsAppearAnim .2s ease-out;
  z-index: 998;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  margin-right: -162px;
  flex-direction: column;
  width: 44px;
  height: 132px;
  background-color: ${colors.secondContainerColor};
  border-radius: 8px;
  
  .flagItem{
    z-index: 999;
    cursor: pointer;
    display: flex;
    width: fit-content;
    height: fit-content;
    padding: 4px;
    border-radius: 6px;
    :hover{
      background-color: ${colors.thirdContainerColor};
    }
  }
  
  ::before{
    z-index: 997;
    position: absolute;
    background-color: ${colors.secondContainerColor};
    content: '';
    top: 60px;
    left: -6px;
    transform: rotate(45deg);
    width: 16px;
    height: 16px;
  }
`