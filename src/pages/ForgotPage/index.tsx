import React from 'react';

import { Container, LeftSideContent, RightSideContent, StyledBackButton} from './styles';

import {BsArrowLeft} from 'react-icons/bs'

import {HorizontalLogo} from '../../assets/Icons'

import { colors } from '../../styles/Colors';
import { Link } from 'react-router-dom';
import ForgotUserForm from '../../components/Forms/ForgotUserForm';

//tela inicial da aplicação
const ForgotPage: React.FC = () => {
  return (
    <Container>
      <LeftSideContent/>
      <RightSideContent>
        <div className="Header">
          <HorizontalLogo/>
        </div>
        <div className="Headline">
          <div className="Message">
            <strong>Vamos dar um <br/> jeito nisso</strong>
            <p>Enviaremos as opções de redefinição para o seu email.</p>
          </div>
        </div>
        <div className="FormBox">
        <ForgotUserForm/>
          <Link to="/">
        <StyledBackButton>
            <BsArrowLeft size={24} color={colors.disabledColor}/>
              <h1>VOLTAR</h1>
          </StyledBackButton> 
          </Link>
        </div>
        <div className="Footer"></div>
      </RightSideContent>
    </Container>
  )
}

export default ForgotPage