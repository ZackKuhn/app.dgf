import styled, {css} from "styled-components";
import { Field, Form } from  'formik'
import ReactSelect from 'react-select'

import { colors } from "../../../styles/Colors";

interface StyledErrorProps {
  validatefailed?: boolean;
}

type ButtonProps = {
  disabled?: boolean
}

export const Container = styled.div`
  width: 100%;
  min-height: 280px;
  display: flex;

  .LoaderContainer{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 200px;
}
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
  padding-inline: 12px;
  font-size: 14px;
  border-left: ${props => props.validatefailed ? `4px solid ${colors.redFlag}`: 'none'};
  ::placeholder{
    color: ${colors.infoTextColor};
  }
`;

export const StyledButton = styled.button<ButtonProps>`
  width: 288px;
  height: 44px;
  border-radius: 4px;
  background-color: ${colors.actionColor};
  color: ${colors.mainTextColor};
  cursor: ${props => props.disabled ?  'not-allowed' : 'pointer'};
  opacity: ${props => props.disabled ? .4 : 1 };
  margin-top: 24px;
  font: 700 12px 'Roboto';
`