import React from 'react';
import { LogotipoCta } from '../../assets/Icons';

import { Container } from './styles';

const LoginCta: React.FC = () => {
  return (
    <Container>
      <LogotipoCta />
      <h1>Tecnologia que eleva o <br/> marketing digital à sua <br/> efetividade máxima</h1>
    </Container>
    );
}

export default LoginCta;