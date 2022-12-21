import styled from "styled-components";

import { colors } from "../../styles/Colors";

interface StyleProps {
  bgcolor?: string
}

export const Container = styled.div<StyleProps>`
  display: flex;
  align-items: center;
  width: 52px;
  height: 20px;
  border-radius: 36px;
  background-color: ${props =>
  props.bgcolor === 'negative' && colors.molRedContColor ||
  props.bgcolor === 'default' && colors.molDefaultContColor ||
  props.bgcolor === 'positive' && colors.molGreenContColor};
  padding-left: 2px;
  h1{
    font-size: 12px;
    color: ${props =>
  props.bgcolor === 'negative' && colors.molRedTextColor ||
  props.bgcolor === 'default' && colors.molDefaultTextColor ||
  props.bgcolor === 'positive' && colors.molGreenTextColor};
  }
`