import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  padding: 0 10px;
  height: 40px;
  background-color: #2A2A30;
  border-radius: 4px;
  margin: 5px;
  cursor: pointer;
  h1{
    font: 500 12px 'Roboto';
    color: white;
  }
  
    :hover{
    background-color: #34343B;
  }
`