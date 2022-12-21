import React, {useContext} from 'react'

import { Container } from './styles'

import AppContext from '../../AppContext/Context'
import { StyledText } from '../../styles/Texts'

const PageInfoHeader: React.FC = () => {

  return (
    <Container>
      <div className="UserLabel">
        Olá, Ezequias
      </div>
      <StyledText text="Hard Work Beats Talent" size='sm'/>
    </Container>
  )
}

export default PageInfoHeader