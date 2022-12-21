import styled from 'styled-components'

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