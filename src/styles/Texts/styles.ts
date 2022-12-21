import styled, {css} from 'styled-components'
import {colors} from '../Colors'

const MainFont: string = `"Roboto", sans-serif`

type StyledProps = {
  isBold?: boolean
  inSize?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
  isAccent?: boolean
  isDisabled?: boolean
  clickAble?: boolean
}

export const StyledLabel = styled.label<StyledProps>`
font-family: ${MainFont};
font-size: ${ props => 
props.inSize === 'xs' && '0.75rem'  ||
props.inSize === 'sm' && '.875rem'  ||
props.inSize === 'base' && '1rem'   ||
props.inSize === 'lg' && '1.125rem' ||
props.inSize === 'xl' && '1.5rem'
};
font-weight: ${props => props.isBold ? '700' : '400'};
color: ${(props) => props.isAccent ? colors.accentTextColor : colors.neutralTextColor};
color: ${(props) => props.isDisabled && colors.disabledColor};
${
  props => props.clickAble && css`cursor: pointer; :hover{color: ${colors.actionColor}}`
}
`;

