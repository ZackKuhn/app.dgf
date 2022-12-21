import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

interface ShortProps {
  label?: String;
  link?: String;
}

//Atalhos para ações rápidas no perfil
const Shortcuts: React.FC<ShortProps> = ({ label, link }) => {
  return (
    <Container>
      <Link to={"link"} >
        <div className="icon"></div>
        <h1>{label}</h1>
      </Link>
    </Container>
  )
}
export default Shortcuts;