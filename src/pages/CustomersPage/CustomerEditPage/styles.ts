import styled from 'styled-components'

import { DiGoogleDrive } from 'react-icons/di'
import { SiGoogleads } from 'react-icons/si'
import { TbBrandMeta } from 'react-icons/tb'

import {colors} from '../../../styles/Colors'

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
  
  width: 840px;
  height: 100%;  
  /* ignore nav space */
  margin-top: 36px;
`

export const CustomerPageDivider = styled.div`
  display: flex;
  justify-content: space-between;
  /* --- lateral distance for widher monitor */
  align-items: center;
  padding: 0 25px;
  width: 100%;
  height:fit-content;
  margin: 80px 0 30px 0 ;
`

export const CustomerHeader = styled.div`

@keyframes CustomerPageAnim {
  0%{
    transform: translateY(50px);
  }
  100%{
    transform: translateY(0);
  }
}

animation: CustomerPageAnim .4s ease;
display: flex;
align-items: center;
width: 100%;
height: 128px;
background: linear-gradient(180deg, #23222E 0%, rgba(32,32,36,0) 100%);
border-radius: 7px;

.LogoBox {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 100%;
}

.RightBox { 
  display: flex;
  flex: 1;
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

  .RankingButtom, .EditButton{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    padding: 8px;
    border-radius: 8px;
  }
}

.CustomerInfo{
  display: flex;
  width: fit-content;
  flex-direction: column;
}
`;  

export const EditPageTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 8px;
`

export const CustomerLogo = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 4px;
  background-color: ${colors.infoTextColor};
`

export const CustomerDataBox = styled.div`
display: grid;
width: 850px;
height: 300px;
margin: 10px;
.DataBox{
  display: flex;
  flex-direction: column;
  border-radius: 7px;
  height: 80%;
  background: ${colors.firstContainerColor}; 
  padding-inline: 32px;

    width: 100%;
    margin-top: 12px;
  }
  
  .DataHeader{
    display: flex;
    width: 100%;
    height: 40px;
    align-items: center;
    margin-top: 8px;
    justify-content: space-between;
  }

  .DataSetContainer{
    display: flex;
    max-width: 800px;
    height: 100%;
    align-items: center;
    margin-top: 8px;
  }
`

export const MetaIcon = styled(TbBrandMeta)`
  width: 36px;
  height: 36px;
  color: ${colors.thirdContainerColor};
  cursor: pointer;
  :hover{
    color: ${colors.actionColor};
  }
`
