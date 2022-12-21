import styled from "styled-components";
import { colors } from "../../styles/Colors";

interface styleProps{
  checkedStyle?: boolean
}

export const Container = styled.div`
      display: flex;
      gap: 8px;
      width: 100%;
      height: 100%;
      align-items: center;
      .StepDot{
        width: 20px;
        height: 20px;
        .UncheckedCircle{
        width: 20px;
        height: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${colors.thirdContainerColor};
        border-radius: 50%;

          span{
            font: 'roboto', sans-serif;
            font-size: 14px;
            font-weight: bold;
            color: ${colors.lightIconColor};
          }
        }
      }
      
      .line{
        width: 88px;
        height: 1px;
        background-color: ${colors.thirdContainerColor};
      }
`

export const StepLabel = styled.h1<styleProps>`
  font: 'roboto', sans-serif;
  font-size: 14px;
  color: ${
    props => props.checkedStyle ? colors.accentTextColor : colors.thirdContainerColor
  };
`