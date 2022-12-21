//Componentes estilizados
import {Container, LeftBox, RightBox, LoginHeader, LoginFooter, LoginLinesImage, AnimatedBorder} from './styles'
//Componentes
import LoginForm from '../../components/LoginForm'
import { Logo, Logotipo } from '../../assets/Icons'

import {motion, Variants} from 'framer-motion'

// import BgLines from '../../assets/dgStroke.png'
import LoginCta from '../../components/LoginCta'
import AnimatedBackground from '../../components/AnimatedBackground'

export function LoginPage(){

  return (
    <Container>
      {/* <ParticlesBg/> */}
      <AnimatedBackground/>
      <LeftBox>
        <LoginCta/>
      </LeftBox>
        <RightBox>
        <LoginHeader>
          <Logo/>
        </LoginHeader>
      <motion.div
            initial={{opacity: 0, scale: .8}}
            animate={{opacity: 1, scale: 1}}
            transition={{ type: 'spring', bounce: .4, duration: .3}}
            >
        <LoginForm/>
        </motion.div>
        <LoginFooter>
          <Logotipo/>
        </LoginFooter>
      </RightBox>
    </Container>
  )
}