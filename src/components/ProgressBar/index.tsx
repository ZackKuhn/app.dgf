import React, { useEffect, useState } from 'react';

import { Container, LevelLabel, BgBar, ProgressiveBar, LevelPin, LevelTarget } from './styles';

import {TbCrown as TargetIcon} from 'react-icons/tb'
import { colors } from '../../styles/Colors';
import { StyledText } from '../../styles/Texts';

interface ProgressBarProps {
  level: number
  maxlevel: number
}

const ProgressBar: React.FC<ProgressBarProps> = ({level, maxlevel}) => {

  const [isHover, setHoverState] = useState(false)

  return (
    <Container >
      <BgBar>
        <ProgressiveBar barvalue={level} weight='base' maxvalue={maxlevel}/>
        {
          level >= 1 &&
          <LevelPin onMouseOver={()=> setHoverState(true)} onMouseOut={()=> setHoverState(false)}/>
        }
        {
          isHover &&
          <LevelLabel>
            <StyledText text={`${level}%`} accent bold size='xs' disabled/>
          </LevelLabel>
        }
      </BgBar>
    </Container>
  );
}

export default ProgressBar;