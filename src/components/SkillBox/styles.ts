import styled from "styled-components";
import { colors } from "../../styles/Colors";

interface styledProps {
  gradientbg?: boolean
}

export const Container = styled.div<styledProps>`
  display: flex;
  flex-direction: column;
  width: 124px;
  height: 88px;
  /* background-color: ${props => !props.gradientbg ? colors.secondContainerColor : colors.thirdContainerColor}; */
  border-left: 2px solid ${colors.secondContainerColor};
  
  padding-inline: 12px;
  border-radius: 4px;

  .header{
    display: flex;
    align-items: flex-end;
    width: 100%;
    height: 44px;
    }

  .content{
    display: flex;
    gap: 2px;
    align-items: center;
    width: 100%;
    height: 100%;

  }
`
