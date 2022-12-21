import React, { useState } from 'react';

import { colors } from '../../styles/Colors';
import { Container } from './styles';

import { BsArrowUpShort, BsArrowDownShort} from 'react-icons/bs';
import { AiOutlineMinus } from 'react-icons/ai';

interface MoreOrLessProps {
  value?: number
  refColor: string
}

const MoreOrLessIndicator: React.FC<MoreOrLessProps> = ({value, refColor}) => {

  return (
    <Container bgcolor={refColor}>
      {
        refColor === 'negative' && <BsArrowDownShort size={18} color={colors.molRedTextColor}/> ||
        refColor === 'default' && <AiOutlineMinus size={18} color={colors.molDefaultTextColor}/> || 
      refColor === 'positive' && <BsArrowUpShort size={18} color={colors.molGreenTextColor}/>
      }
      
      <h1>{`${value}%`}</h1>
    </Container>
  );
}

export default MoreOrLessIndicator;