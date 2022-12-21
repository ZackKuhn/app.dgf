import React, { ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

import { AddIcon } from "../../assets/Icons"
import { StyledText } from '../../styles/Texts';

import { Button } from './styles'


interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  link?: string;
  size?: string;
  borderStyle?: boolean;
  unlockState?: boolean;
  hasIcon?: boolean;  
}

const StyledButton: React.FC<BtnProps> = ({ label, link, size, borderStyle, unlockState, hasIcon, ...rest }) => {
  return (
    <Link to={`${link}`}>
      {
        hasIcon ?
          <Button {...rest} theme={{ size }} border={borderStyle} unlock={unlockState}>
            <span id="whitIcon">{label}</span>
            <AddIcon />
          </Button> :
          <Button {...rest} theme={{ size }} border={borderStyle} unlock={unlockState}>
            <span>{label}</span>
          </Button>
      }

    </Link>
  );
}

export default StyledButton;