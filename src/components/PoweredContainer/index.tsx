import React from 'react';
import { Logotipo } from '../../assets/Icons';

import { Container } from './styles';

const PoweredContainer: React.FC = () => {
  return (
    <Container>
    <div className="LeftSide">
    <Logotipo/> 
    </div>
    <div className="RightSide">
      <h1>Powered by</h1>
      <h2>John.one</h2>
    </div>
  </Container>
  );
}

export default PoweredContainer;