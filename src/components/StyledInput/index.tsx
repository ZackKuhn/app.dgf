import React, { useState, InputHTMLAttributes } from "react";


import { colors } from "../../styles/Colors";

//Styled components
import { Container, Icon, OpenedEyeIcon, ClosedEyeIcon, EmailIcon, PassIcon, StyledField } from './styles';

//Props - tipagem
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  password?: boolean;
  icon?: string;
}

const StyledInput: React.FC<InputProps> = ({ password, icon, ...rest }) => {

  //Estado da visualização do icone "ver senha"
  const [isToggled, setToggle] = useState(true)
  //Estado da visualização do icone "ver senha"
const [hasFocus, setFocus] = useState(false)

  //função que altera o ícone "ver senha" (eye)
  const HandleClick = () => {
    setToggle(!isToggled)
  }

  return (
    <Container style={{ outline: hasFocus ? `2px solid ${colors.actionColor}` : "" }}>
      {
        icon && 
        <div className="InputIcon">
          {
            icon === "email" ? <EmailIcon infocus={hasFocus} /> : <PassIcon infocus={hasFocus} />
          }
        </div>
      }

      <StyledField {...rest}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        type={password && isToggled ? 'password' : 'text'} />
      {password && (
        <Icon onClick={HandleClick}>
          {isToggled ? <OpenedEyeIcon /> : <ClosedEyeIcon />}
        </Icon>
      )}
    </Container>
  )
}

export default StyledInput
