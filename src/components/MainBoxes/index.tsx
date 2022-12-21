import React, {useContext, useState} from 'react';

import { CalendarIcon,  MiniCalendarIcon, MiniTimeIcon } from '../../assets/Icons';
import { Container, NextTask, ProfileBox, ProfileButton } from './styles';
import StyledButton from '../../components/StyledButton';
import DGStickMessage from '../DGStickMessage';
import { StyledText, StyledTextArea } from '../../styles/Texts';

import AppContext from '../../AppContext/Context';
import ProfileLevel from '../ProfileLevel';

const UserImg = "https://avatars.githubusercontent.com/u/52352542?v=4";

//Container central do perfil do cientista ou cliente e das próximas atividades
const MainBoxes: React.FC = () => {

  const {userTokenData} = useContext(AppContext)

  const [upWarning, setupWarning] = useState(false)
  // const token = useContext(AuthContext)
  // const profileLink = `/profile/user/${token}`

  return (
    <Container>
      <ProfileBox>
        <div className="ProfileImg">
          <div className="ImgContainer">
            <img src={UserImg} alt="" />
          </div>
        </div>
        <div className="ProfileInfo">
          <div className="ProfileName">Meu Perfil</div>
          <div className="ProfileDescription">Na ativa, para encontrar os indicadores chaves.
            de vendas.</div>
          <ProfileButton>
            <StyledButton label="VER PERFIL" link={`/profile/${userTokenData.id}`} borderStyle/>
          </ProfileButton>
        </div>
        <div className="ProfileLevel">
          <ProfileLevel level={50}/>
        </div>
      </ProfileBox>
      <NextTask onClick={()=> setupWarning(!upWarning)}>
        <div className="IconBox">
          <CalendarIcon />
          <div className="Description">
            <StyledText text='Próximo Checkin' bold accent size='sm'/>
            <h2>Reunião semanal para apontamentos.</h2>
          </div>
        </div>
        <div className="DataBox"> 
          <div className="ChekinDate">
            <MiniCalendarIcon />
            <StyledText text='26' bold accent size='sm'/>
            <StyledText text='julho' size='sm'/>
          </div>
          <div className="ChekinHour">
            <MiniTimeIcon />
            <StyledText text='15' bold accent size='sm'/>
            <StyledText text='horas' size='sm'/>
          </div>
        </div>
        <div className="BtnBox">
          <StyledButton label="VER AGENDA" link="/schedule/:id" borderStyle/>
        </div>
      </NextTask>
      {
        upWarning &&
        <DGStickMessage/>
      }
    </Container>
  );
}

export default MainBoxes;