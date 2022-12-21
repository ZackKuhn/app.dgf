import styled from 'styled-components'

interface InputProps {
  Focused: boolean;
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 340px;
  height: 48px;
  border-radius: 7px;

  background-color: #121214;

  input{
    font-size: 18px;
    font-weight: 500;
    color: var(--InfoText-color);
    border-radius: 8px;
    padding: 0 20px 0 20px;
    width: 100%;
    height: 100%;
  }
  input::placeholder{
    font: 400 14px Roboto;
    color: var(--inputLabel-color);
  }
`
