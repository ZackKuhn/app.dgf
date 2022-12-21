import React, { useEffect, useState } from 'react';

import { Container, LevelLabel, BgBar, ProgressiveBar, LevelPin, LevelTarget } from './styles';

import {AiFillThunderbolt as TargetIcon} from 'react-icons/ai'
import { colors } from '../../styles/Colors';
import { StyledText } from '../../styles/Texts';

interface ProfileLevelProps {
  level: number
}

const ProfileLevel: React.FC<ProfileLevelProps> = ({level}) => {

  const [isHover, setHoverState] = useState(false)

  return (
    <Container>
      <BgBar>
        <ProgressiveBar barvalue={level} weight='base'/>
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
      <LevelTarget>
          <TargetIcon size={28} color={level === 100 ? colors.lightColor : colors.actionColor}/>
        </LevelTarget>
    </Container>
  );
}

export default ProfileLevel;