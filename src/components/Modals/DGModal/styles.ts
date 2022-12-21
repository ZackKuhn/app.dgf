import styled, {css} from 'styled-components';
import { motion } from 'framer-motion';

import {colors} from '../../../styles/Colors'

interface StyledProps {
  isOpenned?: boolean
}

interface FooterProps {
  isStarted: boolean;
}

export const Container = styled.div<StyledProps>`
  z-index: 101;
  top: 0;
  left: 0;
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

export const ModalOverlay = styled.div`
  background-color: ${colors.bgDarkColor};
  opacity: .6;
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 100;
  animation: overlayTransition .2s ease;

  @keyframes overlayTransition {
    0%{
      opacity: 0;
    }
    100%{
      opacity: .6;
    }
  }
`

export const ModalHeader = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  border-radius: 4px 4px 0 0;
  padding-inline: 24px;
  margin-bottom: 18px;
  .Title{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .CloseBox{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 38px;
    height: 100%;
    color: ${colors.actionColor};
  }
  `

export const ModalBody = styled.div<StyledProps>`
  display: flex;
  width: 100%;
  min-height: 300px;
  justify-content: center;
  align-items: center; 
`

export const ModalBox = styled(motion.div)`
  z-index: 10000;
  min-width: 400px;
  min-height: 400px;
  background-color: ${colors.firstContainerColor};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .closedButton{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    border-radius: 4px;
    cursor: pointer;
    background-color: ${colors.defaultTextColor};
  }
`
export const ModalFooter = styled.div<FooterProps>`

@keyframes barAnimation {
  0%{
    width: 400px;
  }
  100%{
    width: 0;
  }
}
  display: flex;
  width: 100%;
  height: 24px;

  .TimeBar{
  display: flex;
  width: 100%;
  height: 24px;
  /* background-color: ${colors.tableHoveredRow}; */
  }

  .progressiveBar{
    ${props => props.isStarted && css`animation: barAnimation 5s ease`}
  ;
    display: flex;
    width: 0;
    height: 100%;
    background-color: ${colors.actionColor};
  }
`


