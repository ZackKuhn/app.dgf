import styled, {css} from 'styled-components';

import {colors} from '../../styles/Colors'

export const Container = styled.div`  
  z-index: 99;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  height: 432px;
  border-radius: 8px;
  background-color: ${colors.firstContainerColor};
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  justify-content: center;
  align-items: center;
`

export const LabelText = styled.h1`
  font-size: 10px;
  color: ${colors.infoTextColor};
  letter-spacing: 4px;
`

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex: .4;
`

export const LoginOptionsBox = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  padding-left: 24px;
  `
export const ClickableText = styled.span`
  width: fit-content;
  height: fit-content;
  padding-top: 4px;
  font-size: 12px;
  color: ${colors.infoTextColor};
  text-decoration: underline;
  cursor: pointer;
  :hover {
    color: ${colors.actionColor};
  }
`

export const LoginActionsBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex: .7;
  `

export const LoginButton = styled.button`
  width: 288px;
  height: 48px;
  cursor: pointer;
  border-radius: 4px;
  background-color: ${colors.actionColor};
  transition: all .2s ease;
  font: 700 12px 'Roboto';
  color: ${colors.mainTextColor};
  :hover {
    background-color: ${colors.activatedColor};
  }
`

export const Footer = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
`

export const LineIcon = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  flex: .2;
  padding-right: 10px;
  .LineIcon {
    width: 8px;
    height: 42px;
    border-radius: 8px;
    border: 2px solid ${colors.lineDividerColor};
    background-color: ${colors.actionColor};
  }
`

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  flex: 1;
  h1{
    font-weight: 500;
    font-size: 14px;
    color: ${colors.infoTextColor};
  }
`