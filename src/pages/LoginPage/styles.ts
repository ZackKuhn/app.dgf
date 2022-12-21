import styled from 'styled-components'

export const Container = styled.div`
z-index: 10;  
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 10;  
`

export const LoginLinesImage = styled.img`
  z-index: 5;
  position: absolute;
  width: 100%;
  max-height: 100vh;
  opacity: .2;
  z-index: 10;
`

export const LeftBox = styled.div`
  display: flex;
  width: 60%;
  height: 100%;
  justify-content: center;
  align-items: center;
  z-index: 10;

@media screen and (max-width:768px) {
    display: none;
  }
`

export const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 100%;
  z-index: 10;

  @media screen and (max-width:768px) {
    margin: 0 auto;
  }
` 

export const LoginHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  z-index: 10;
`

export const LoginFooter = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
  z-index: 10;
`

export const AnimatedBorder = styled.div`
  @keyframes animatedgradient {
    0% {
      background-position: 0% 0%;
    }
    50%{
      background-position: 100% 100%;
    }
    100% {
      background-position: 0% 0%;
    }
  }

  position: absolute;
  bottom: 0px;
  height: 12px;
  width: 100%;
  background: linear-gradient(60deg, #8472CB, #6B53CD, #6B53CD, #4354AC, #6B53CD, #8153CD, #AD53CD);
  animation: animatedgradient 3.5s ease infinite;
  background-size: 300% 300%;
  z-index: 1;
`