import {FC} from 'react'

import {StyledLabel} from './styles'

interface TextProp{
  text?: string | number
  bold?: boolean
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl'
  accent?: boolean
  disabled?: boolean
  isClickable?: boolean
}

export const StyledText: FC<TextProp> = ({size, text, accent, bold, isClickable, disabled}) =>{
  return <StyledLabel inSize={size} isBold={bold} isAccent={accent} clickAble={isClickable} isDisabled={disabled}>{text}</StyledLabel>
}

interface TextAreaProp{
  text?: string
  bold?: boolean
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl'
  accent?: boolean
  isClickable?: boolean
}

export const StyledTextArea: FC<TextAreaProp> = ({size, text, accent, bold, isClickable}) =>{
  return <StyledLabel inSize={size} isBold={bold} isAccent={accent} clickAble={isClickable}>{text}</StyledLabel>
}


