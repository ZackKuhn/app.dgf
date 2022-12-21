import styled from 'styled-components'

import { colors } from '../../styles/Colors'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;  
`

export const LeftSideContent = styled.div`
  display: flex;
  flex: .6;
  height: 100%;
`

export const RightSideContent = styled.div`

  @keyframes entryAnim {
    0%{
      flex: .2;
    }
    100%{
      flex: .4;
    }
  }
  animation: entryAnim .3s ease;
  display: flex;
  flex: .4;
  flex-direction: column;
  align-items: center;
  height: 100%;
  background-color: ${colors.firstContainerColor};

  .Header{
    display: flex;
    width: 288px;
    height: 144px;
    justify-content: flex-start;
    align-items: flex-end;
  }

  .Message{
    width: 288px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    strong {
      font-size: 24px;
      font-weight: 700;
      color: ${colors.actionColor};
    }

    p{
      font-size: 16px;
      font-weight: 400;
      color: ${colors.neutralTextColor};
    }
  }
  
  .Headline{
    display: flex;
    width: 100%;
    justify-content: center;
    height: 192px;
  }

  .FormBox{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 348px;
  }
`

export const StyledBackButton = styled.button`
  display: flex;
  align-items: center;
  padding-left: 36px;
  width: 288px;
  height: 44px;
  color: ${colors.mainTextColor};
  /* outline: 2px solid ${colors.disabledColor}; */
  background-color: ${colors.darkTextColor};
  border-radius: 4px;
  cursor: pointer;
  h1{
    padding-left: 60px;
    font: 700 12px 'Roboto';  
    letter-spacing: 1px;
    color: ${colors.accentTextColor};
  }

  :hover{
    background-color: ${colors.neutralTextColor};
  }
`

