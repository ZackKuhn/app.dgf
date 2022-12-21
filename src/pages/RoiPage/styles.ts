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
  width: 850px;
  height: 100%;  
  /* ignore nav space */
  margin-top: 36px;
`
export const FirstBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 850px;
  height: 100%;
  background-color: ${colors.firstContainerColor};
  border-radius: 8px;
`

export const RoiHeader = styled.div`

@keyframes entryAnim {
  0%{
    transform: translateY(50px);
  }
  100%{
    transform: translateY(0);
  }
}

animation: entryAnim .4s ease;
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 100px;
background: linear-gradient(180deg, #23222E 0%, rgba(32,32,36,0) 100%);
border-radius: 7px;

cursor: pointer;

h1{
  font-family: 'Roboto', sans-serif;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 24px;
color: white;
}

h2{
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  /* or 150% */
  color: ${colors.infoTextColor};
}

.LeftBox {
  padding-left: 20px;
  display: flex;
flex-direction: column;
justify-content: center;
width: 50%;
height: 100px;

}

.RightBox {
  display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-end;

padding-right: 40px;
width: 50%;
height: 100px;

#helpIcon{
  width: 30px;
  height: 30px;
  cursor: pointer;
}

  span{
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  line-height: 32px;
  /* or 320% */

  display: flex;
  align-items: center;
  text-align: center;

  color: #5A5A62;
  transition: all .2s ease;
  }
}

  :hover{
    background-color: ${colors.firstContainerColor};
    transform: translateY(-4px);
    transition: all .2s ease;
  }
`;  

export const HelpIcon = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 130px;
height: fit-content;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 48px;
  background-color: ${colors.bgInputColor};
  border-radius: 4px;
  font-weight: 500;
  font-size: 12px;
  color: ${colors.mainTextColor};
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 100%;
  }
  input {
    height: 100%;
    font-weight: 500;
    color: ${colors.mainTextColor};
  }
`