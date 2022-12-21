import styled from 'styled-components';
import {colors} from '../../styles/Colors'

export const Container = styled.div`
  position: absolute;
  bottom: 0;
  width: 850px;
  height: 95px;
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  align-items:center;

  padding: 0 20px;

  margin: 10px;
  border-radius: 7px;

.LeftSide{
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.RightSide{
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

h1{
  font: 400 12px 'Roboto';
  color: ${colors.darkTextColor}; 
}

h2{
  font: 700 16px 'Roboto';  
  color: ${colors.infoTextColor};
  margin-left: 2px;
}
`;