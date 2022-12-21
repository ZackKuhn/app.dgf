import styled from 'styled-components'

import {colors} from '../../styles/Colors'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;  
  `
  export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  .loadingContainer{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .ServerErrorContainer{
    position: absolute;
    top: 30%;
    display: flex;
    flex-direction: column;
    gap: 24px;
    justify-content: center;
    align-items: center;
    width: fit-content;
    height: fit-content;
    .ServerErrorMessage{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
  
  width: 850px;
  height: 100%;  
  /* ignore nav space */
  margin-top: 36px;
`
export const MainBoxes = styled.div`
  display: flex;
  flex-direction: column;
  width: 850px;
  height: 100%;  
`

export const TaskPageDivider = styled.div`
  display: flex;
  justify-content: space-between;
  /* --- lateral distance for widher monitor */
  align-items: center;
  padding: 0 25px;
  width: 100%;
  height:fit-content;
  margin: 80px 0 30px 0 ;
`

export const TaskHeader = styled.div`

@keyframes entryAnim {
  0%{
    transform: translateY(50px);
  }
  100%{
    transform: translateY(0);
  }
}

z-index: 0;
animation: entryAnim .4s ease;
display: flex;
align-items: center;
width: 100%;
height: 128px;
background: linear-gradient(180deg, #23222E 0%, rgba(32,32,36,0) 100%);
border-radius: 8px;

cursor: pointer;

.RightBox { 
  display: flex;
  flex: 1;
  height: 80%;
  padding-right: 36px;
  justify-content: flex-end;
  align-items: center;
  gap: 4px;
  .infoLabel{
    display: flex;
    width: 80px;
    height: 80px;
    flex-direction: column;
    justify-content: center;
    gap: 4px;
  }
  .AddNew{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 130px;
    height: 100%;
    padding-right: 8px;
  }
}

.CustomerInfo{
  display: flex;
  width: fit-content;
  flex-direction: column;
  margin-left: 36px;
  }
`;  

export const TaskName = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`

export const TaskLogo = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 4px;
  background-color: ${colors.infoTextColor};
`

export const TaskDataBox = styled.div`
z-index: 1;
display: flex;
flex-direction: column;
grid-template-areas: "data description buttoms";
width: 850px;
height: 200px;
.TableLabel{
  display: grid;
  grid-template-columns: .3fr .3fr .2fr .2fr .1fr;
  border-radius: 4px;
  justify-content: space-evenly;
  width: 850px;
  height: 40px;
  background: ${colors.firstContainerColor}; 
  padding: 12px;

  .labelBox{
    display: flex;
    flex: 1;
    height: 100%;
    align-items: center;
    color: ${colors.disabledColor};
    span{
      font-size: 12px;
    }
  }
}
`

export const TaskTable = styled.div`
  display: flex;
  flex-direction: column;
  width: 850px;
  height: fit-content;
  color: white;
  cursor: pointer;
`

export const TaskRow = styled.div`
  display: grid;
  grid-template-columns: .3fr .3fr .2fr .2fr .1fr;
  justify-content: space-evenly;
  width: 100%;
  padding: 12px;
  border-bottom: 1px solid ${colors.lineDefaultColor};
  

:hover{
  background-color: ${colors.tableHoveredRow};
  
}
`

export const TaskCell = styled.div`
  display: flex;
  cursor: pointer;
  
`

export const RowIcon = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 36px;
`
