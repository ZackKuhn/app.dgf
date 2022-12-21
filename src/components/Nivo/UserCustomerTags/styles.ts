import styled, {css} from 'styled-components';

import {colors} from '../../../styles/Colors'

interface QuadProps {
  isActivated?: string;
}

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  flex-wrap: wrap;
  gap: 4px;
  font-size: 8px;
  padding-inline: 18px;
  margin-top: 8px;
`;

export const Quad = styled.div<QuadProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: fit-content;
  padding: 4px 8px;
  color: ${props => props.isActivated ? colors.mainTextColor : colors.disabledColor};
  font-size: 12px;
  background-color: ${props => props.isActivated === "ativo" ? colors.actionColor : colors.lineDefaultColor};
  border-radius: 4px;
  cursor: pointer;
`;
