import React, { useEffect, useContext, useState } from 'react';

import AppContext from '../../../AppContext/Context';

import { Container, ModalBox, ModalOverlay, ModalHeader, ModalBody, ModalFooter} from './styles';
import { CloseIcon } from '../../../assets/Icons';

import {StyledText} from '../../../styles/Texts'


interface ModalProps {
  children?: JSX.Element | JSX.Element[];
  title?: string
  barTimmer?: boolean
}

const DGModal: React.FC<ModalProps> = ({children, title, barTimmer}) => {

    const { state, setState: setModalState, animState, setAnimState, goToAnimState, setGoToAnim } = useContext(AppContext)

    const handleClickClosedModal = ()=>{
      setModalState({openModal: false})
      setAnimState({startAnim: false})
      setGoToAnim({goToAnim: false})
    }

    return (
    <Container isOpenned={state.openModal}>
    <ModalOverlay onClick={handleClickClosedModal}/>
    <ModalBox 
    initial={{y: 70}}
    animate={{y: 0}}
    transition={{ type: 'spring',bounce: .3, duration: .5}}
    >
  
      <ModalHeader>
        <div className="Title">
        <StyledText text={title} size='sm' accent bold/>
        </div>
        <div className="CloseBox">
          <CloseIcon onClick={handleClickClosedModal}/>
        </div>
      </ModalHeader>
      <ModalBody>
      {children}
      </ModalBody>
      <ModalFooter isStarted={animState.startAnim}>
        {
          barTimmer &&
          <div className="TimeBar">
            <div className="progressiveBar" />
          </div>
        }
      </ModalFooter>
    </ModalBox>
  </Container>
  );
}

export default DGModal;