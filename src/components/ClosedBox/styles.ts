import styled from 'styled-components';

import { colors } from '../../styles/Colors';

export const Container = styled.div`
  position: absolute;
  margin-left: -32px;
  display: flex;
  width: 32px;
  height: 120px;
  justify-content: center;
  align-items: center;
  border-radius: 4px 0 0 4px;

  cursor: pointer;

  background-color: ${colors.firstContainerColor};

  :hover{
    margin-left: -32px;
    background-color: ${colors.secondContainerColor};
  }
`;
