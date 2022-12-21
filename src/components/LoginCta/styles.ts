import styled from "styled-components";
import { colors } from "../../styles/Colors";

export const Container = styled.div`
  z-index: 10;
  display: flex;
  flex-direction: column;
  width: 400px;
  height: fit-content;
  font-family: 'Roboto', sans-serif;
  h1{
    font-size: 24px;
    font-weight: bold;
    color: ${colors.defaultTextColor}
  }
  h2{
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: ${colors.infoTextColor}
  }

`