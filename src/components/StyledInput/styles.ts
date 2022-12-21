import styled, { css } from "styled-components";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi';
import { FiLock } from 'react-icons/fi';
import {Field} from 'formik'


import {colors } from '../../styles/Colors'

interface InputProps {
  infocus: boolean;
}

export const StyledField = styled(Field)`
  font: 500 18px 'Roboto';
    color: ${colors.mainTextColor};
    display: flex;
    width: 288px;
    height: 56px;
    padding-right: 18px;
    font-size: 14px;
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 288px;
  height: 56px;
  background: ${colors.bgDarkColor};
  border-radius: 4px;
  margin: 8px;
  .InputIcon{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    min-width: 48px;
  }

  input::placeholder{
    font: 500 12px 'Roboto';
    color: ${colors.placeHolderTextColor};
  }
`;

export const Icon = styled.div`
  padding-right: 16px;
  cursor: pointer;
`;

export const OpenedEyeIcon = styled(AiOutlineEye)`
  width: 20px;
  height: 20px;
  color: ${colors.actionColor};
`

export const ClosedEyeIcon = styled(AiOutlineEyeInvisible)`
  width: 20px;
  height: 20px;
  color: ${colors.disabledButtonColor};
` 
export const EmailIcon = styled(HiOutlineMail)` 
  width: 20px;
  height: 20px;
  transition: color .1s ease-out;
  color: ${colors.disabledColor};
    ${(props: InputProps) =>
      props.infocus &&
      css`color: ${colors.actionColor};`}
    `

export const PassIcon = styled(FiLock)`
  width: 20px;
  height: 20px;
  color: ${colors.disabledColor};
  transition: color .1s ease-out;
  color: ${colors.disabledColor};
    ${(props: InputProps) =>
      props.infocus &&
      css`color: ${colors.actionColor};`}
  `