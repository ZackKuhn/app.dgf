import React from 'react';

import { Container, LeftSideContent, RightSideContent, StyledBackButton} from './styles';

import {BsArrowLeft} from 'react-icons/bs'

import {HorizontalLogo} from '../../assets/Icons'

import RegisterUserForm from '../../components/Forms/RegisterUserForm'
import { colors } from '../../styles/Colors';
import { Link } from 'react-router-dom';

//tela inicial da aplicação
const RegisterUserPage: React.FC = () => {
  return (
    <Container>
      <LeftSideContent/>
      <RightSideContent>
        <div className="Header">
          <HorizontalLogo/>
        </div>
        <div className="Headline">
          <div className="Message">
            <strong>Você está</strong>
            <p>a poucos passos de acessar o melhor ecossistema validado de resultados <br/> em vendas.</p>
          </div>
        </div>
        <div className="FormBox">
        <RegisterUserForm/>
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

export default RegisterUserPage