import styled from 'styled-components';
import {Link} from 'react-router-dom';

import {colors} from '../../styles/Colors'

export const Container = styled(Link)`
@keyframes ContactFooterEntryAnim {
  0%{
    transform: translateY(20px);
  }
  100%{
    transform: translateY(0);
  }
}

  animation: ContactFooterEntryAnim 1.3s ease;
  position: absolute;
  bottom: 80px;
  width: 850px;
  height: 95px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items:center;
  padding: 0 20px;

    margin: 10px;
  border: 1px solid ${colors.firstContainerColor};
  border-radius: 7px;

h1{
  font: 700 14px 'Roboto';
  color: #5A5A62; 
}

h2{
  font: 400 12px 'Roboto';  
  color: #5A5A62; 
}

:hover{
  outline: 2px solid ${colors.actionColor};
}
`;

export const Wbutton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: fit-content;
  padding: 0 10px;
  height: 70px;
  border-radius: 7px;
  text-decoration: none;
  color: #5A5A62;
  font-size: 12px;
  span{
    margin-right: 8px;
  }
`;