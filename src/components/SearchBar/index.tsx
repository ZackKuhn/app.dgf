import React, { InputHTMLAttributes, useState } from 'react';

//Styled components
import { SearchIcon } from '../../assets/Icons';
import { Container } from './styles';

import { colors } from '../../styles/Colors';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  pass?: string;
}

const SearchBar: React.FC<InputProps> = ({ pass, ...rest }) => {

  const [hasFocus, setFocus] = useState(false)

  return (
    <Container style={{ outline: hasFocus ? `2px solid ${colors.actionColor}` : "" }}>
      <input
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        placeholder="Procurar por nome"
        {...rest}
      />
      <SearchIcon />
    </Container>
  )
}

export default SearchBar;