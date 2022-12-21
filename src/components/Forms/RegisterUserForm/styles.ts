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
`
export const StyledFormikForm = styled(Form)<StyledErrorProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  width: 100%;
  gap: 8px;
` 

export const StyledFormikInput = styled(Field)`
  width: 288px;
  height: 44px;
  color: ${colors.accentTextColor};
  background-color: ${colors.bgDarkColor};
  border-radius: 4px;
  padding-inline: 24px;
  border-left: ${props => props.validatefailed ? `4px solid ${colors.redFlag}`: 'none'};
`;

export const StyledButton = styled.button<ButtonProps>`
  width: 288px;
  height: 44px;
  border-radius: 4px;
  background-color: ${colors.actionColor};
  color: ${colors.mainTextColor};
  cursor: ${props => props.disabled ? 'pointer' : 'not-allowed'};
  opacity: ${props => props.disabled ? 1 : .4 };
  margin-top: 24px;
  font: 700 12px 'Roboto';
`
