import { FC } from 'react'
import { StyledText } from '../../styles/Texts'

//Icon
import { AiOutlineInfoCircle as InfoIcon } from 'react-icons/ai'

//color list
import { colors } from '../../styles/Colors'

//Styled components
import { Container, IconBox, MessageBox, BarTimer } from './styles'

const DGStickMessage: FC = ()=>{
  return (
    <Container>
      <IconBox>
        <InfoIcon size={24} color={colors.actionColor}/>
      </IconBox>
      <MessageBox>
        <StyledText
          text='Não há checkins cadastrados ainda'
          size='sm'
          accent
        />
      </MessageBox>
      <BarTimer>
        <div className="TimeBarStick">
          <div className="progressiveBarStick" />
        </div>
      </BarTimer>
    </Container>
  )
}



export default DGStickMessage