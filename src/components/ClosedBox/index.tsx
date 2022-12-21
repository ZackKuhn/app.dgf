import React from 'react';

import {TbArrowBack as BackIcon} from 'react-icons/tb'
import { Container } from './styles';

import { colors } from '../../styles/Colors';

const ClosedBox: React.FC = () => {
 return (
  <Container>
    <BackIcon size={24} color={colors.actionColor}/>
  </Container>
 )
} 

export default ClosedBox;
