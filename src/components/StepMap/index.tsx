import React, { useState } from 'react';
import {BsFillCheckCircleFill as CheckedCircleIcon} from 'react-icons/bs'

import { colors } from '../../styles/Colors';

import { Container, StepLabel } from './styles';

interface StepMapProps {
  label: string
  number: string
  checkedstate?: boolean
}

const StepMap: React.FC<StepMapProps> = ({label, number, checkedstate}) => {

  const [isChecked, setChecked] = useState(checkedstate)

  return (
    <Container>
      <div className="StepDot">
        {
          isChecked ?
          <CheckedCircleIcon size={20} color={colors.actionColor}/> :
          <div className="UncheckedCircle">
          <span>{number}</span>
          </div>
        }
      </div>
      <StepLabel checkedStyle={isChecked}>{label}</StepLabel>
      <div className="line"></div>
    </Container>
  );
}

export default StepMap;