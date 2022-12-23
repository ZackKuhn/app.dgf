import React, {useState} from 'react';

import { FlagIcon } from '../../assets/Icons';
import api from '../../utils/api';

import { Container, MainFlagContainer, FlagsPopUp } from './styles';

interface flagProps {
  flagcolor: number
  flagowner: string
}

const FlagBox: React.FC<flagProps> = ({flagcolor, flagowner}) => {

  const [isOpenned, setIsOpenned] = useState(false)
  const [ flagColor, setFlagColor] = useState(flagcolor)

  const handleChangeFlag = ()=>{
    api.post('/customers/upflag', {'id': flagowner, 'flag': flagColor})
  }
  
  return (
    <Container>
      <MainFlagContainer onClick={() => setIsOpenned(!isOpenned)} bgactive={isOpenned}>
      <FlagIcon size={24} flagcolor={flagColor}/>
      </MainFlagContainer>
      {
        isOpenned && 
        <FlagsPopUp onMouseLeave={()=> {setIsOpenned(false); handleChangeFlag()}}>
          <div className="flagItem" onClick={() => {setFlagColor(1)}}>
            <FlagIcon size={24} flagcolor={1}/>
          </div>
          <div className="flagItem" onClick={() => {setFlagColor(2)}}>
            <FlagIcon size={24} flagcolor={2}/>
          </div>
          <div className="flagItem" onClick={() => {setFlagColor(3)}}>
            <FlagIcon size={24} flagcolor={3}/>
          </div>
        </FlagsPopUp>
      }
      
    </Container>
  );
}

export default FlagBox;




