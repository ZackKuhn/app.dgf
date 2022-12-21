import styled, {css} from 'styled-components';

import {colors} from '../../styles/Colors'

interface StyleProps{
  border?: boolean
  unlock?: boolean
}

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${props => props.theme.size};
    height: 44px;
    padding: 12px 24px;
    border-radius: 4px;
    cursor: pointer;
    color: white;
    
    ${(props: StyleProps) =>
      props.border ?
      css` 
      border: 2px solid ${colors.actionColor};
      color: ${colors.mainTextColor};
      height: 44px;
      ` : css`
      background-color: ${colors.actionColor};
      `}
      
      ${(props: StyleProps) =>
      props.unlock &&
      css` 
        background: #B62737;
        color: white;
      `}

      :hover{
    ${(props: StyleProps) =>
      props.border ?
      css` 
      background-color: ${colors.actionColor};
      ` : css`
      background-color: ${colors.activatedColor};
      `
    }
      }
      
    span{
        font: 700 12px 'Roboto';  
        line-height: 16px;
    } 

    #whitIcon{
      font: 700 12px 'Roboto';  
        letter-spacing: 1px;
        padding-right: 10px;
    }
`;