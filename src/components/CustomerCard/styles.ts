import styled from 'styled-components';

import {colors} from '../../styles/Colors'

export const Container = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 100%;
  cursor: pointer;

  .CustomerLogo{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
  }

  .Info{
    display: flex;
    flex-direction: column;
  }
`;
