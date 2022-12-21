import React, { useContext } from 'react'
import {FiHelpCircle} from 'react-icons/fi'

import { Container, HelpIcon } from './styles'

import { colors } from '../../styles/Colors'
import { StyledText } from '../../styles/Texts'
import AppContext from '../../AppContext/Context'

const MessageBanner: React.FC = () => {

  const { userTokenData, setUserTokenData: setUser } = useContext(AppContext)

  return (
    <Container>
      <div className="LeftBox">
        <h1>Atividades da semana</h1>
        {/* <h2>Veja aqui, quais são as principais tarefas.</h2> */}
        <StyledText text="Clique para ver" size='sm'/>
      </div>
      <div className="RightBox">
        <HelpIcon>
          <span>Plano DGthusPro</span>
          <FiHelpCircle size={18} color={colors.actionColor} onClick={()=> setUser({...userTokenData, email: 'ciclano'})}/>
        </HelpIcon>
      </div>
    </Container>
  )
}

export default MessageBanner