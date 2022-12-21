import React from 'react';
import { StyledText } from '../../styles/Texts';
import ProgressBar from '../ProgressBar';

import { Container } from './styles';


interface SkillBoxProps {
  label: string
  currentvalue: number
  maxvalue: number
  active?: boolean
}

const SkillBox: React.FC<SkillBoxProps> = ({label, currentvalue, maxvalue, active}) => {

  const convertedValue = Math.round(currentvalue/maxvalue*100)
  return (
    <Container gradientbg={active}>
        <div className="header">
          <StyledText text={label} bold size='xs'/>     
        </div>
        <div className="content">
          <StyledText text={currentvalue} size='lg' accent bold/>
          <StyledText text="/" size='xs' bold/>
          <StyledText text={maxvalue} size='xs' bold/>
        </div>
        <ProgressBar level={convertedValue} maxlevel={maxvalue}/>
    </Container>
  );
}

export default SkillBox;