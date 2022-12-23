import styled, {css} from "styled-components";
import { Field, Form } from  'formik'

import { colors } from "../../../styles/Colors";

interface StyledErrorProps {
  validatefailed?: boolean;
}

type ButtonProps = {
  disabled?: boolean
}

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .LoaderContainer{
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
}
`

export const StyledFormikForm = styled(Form)<StyledErrorProps>`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 8px;
  flex-grow: 2;
  flex-wrap: wrap;
` 

export const StyledFormikInput = styled(Field)`
  width: 48%;
  height: 44px;
  color: ${colors.accentTextColor};
  background-color: ${colors.bgDarkColor};
  border-radius: 4px;
  padding-inline: 12px;
  font-size: 14px;
  border-left: ${props => props.validatefailed ? `4px solid ${colors.redFlag}`: 'none'};
  ::placeholder{
    color: ${colors.infoTextColor};
  }
`;

export const StyledButton = styled.button<ButtonProps>`
  width: 48%;
  height: 44px;
  border-radius: 4px;
  background-color: ${colors.actionColor};
  color: ${colors.mainTextColor};
  cursor: ${props => props.disabled ?  'not-allowed' : 'pointer'};
  opacity: ${props => props.disabled ? .4 : 1 };
  font: 700 12px 'Roboto';
`
