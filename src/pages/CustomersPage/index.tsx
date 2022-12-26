import React, { useState, useEffect, useContext } from 'react';
import ContactFooter from '../../components/ContactFooter';

//Styled Components & styles assets
import NavBar from '../../components/NavBar';
import PoweredContainer from '../../components/PoweredContainer';
import { colors } from '../../styles/Colors';
import { StyledText } from '../../styles/Texts';
import { tableLabel } from './CustomersPageData';
import { Container, Content, CustomerCell, CustomerDataBox, CustomerHeader, CustomerName, CustomerPageDivider, CustomerRow, CustomerTable, RowIcon } from './styles';

import api from '../../utils/api';
import { CustomerDataTypes } from '../../utils/dataTypes';

//Loader imports
import Lottie from 'react-lottie-player';
import dgthus_loader from '../../assets/lottieAnimations/dgthus_loader.json';

import Funnel from '../../components/Nivo/Funnel';

//Icons
import { BiUserPin as CustomersIcon } from 'react-icons/bi';
import { MdOutlineOpenInNew as OpenIcon } from 'react-icons/md';
import { ConeServerErrorAnimation, ServerErrorAnimation } from '../../components/AnimatedComponents';
import StyledButton from '../../components/StyledButton';
import { AxiosError } from 'axios';
import { Link } from 'react-router-dom';
import { AddClientIcon, CustomerDgIcon } from '../../assets/Icons';
import AppContext from '../../AppContext/Context';
import DGModal from '../../components/Modals/DGModal';
import NewCustomerForm from '../../components/Forms/NewCustomerForm';

//tela inicial da aplicação
const CustomersPage: React.FC = () => {

  const [isLoading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)
  const [data, setData] = useState<CustomerDataTypes[]>([])

  const { state, setState: setModalState } = useContext(AppContext)

  const handleAction = ()=>{
    setModalState({openModal: true})
  }

  useEffect(() => {
    api.get('/customers').then(response => {
      setData(response.data);
      setLoading(true);
    }).catch(function(){
       setErrorMessage(true)
      console.log(AxiosError.ERR_BAD_REQUEST)
    })
  }, [state])

  return (
    <Container>
      <NavBar />
      <Content>
        {
          state.openModal &&
          <DGModal title='Novo Cliente' barTimmer>
            <NewCustomerForm/>
          </DGModal>
        }
        {
        isLoading ? <>
          <CustomerPageDivider>
          <div className="UserLabel"/>
          </CustomerPageDivider>
          <CustomerHeader>
            <div className="CustomerInfo">
              <CustomerName>
                <CustomerDgIcon/>
                <StyledText text='Clientes' accent bold size='xl'/>
              </CustomerName>
            </div>
            <div className="RightBox">
              <div className="infoLabel" id="contrato">
                <StyledText text='registrados' size='xs' bold/>
                <StyledText text={data.length} size='base' bold accent/>
              </div>
              <div className="AddNew">
              <AddClientIcon onClick={() => handleAction()}/>
              </div>
            </div>
          </CustomerHeader>
        <CustomerDataBox>
          <div className="TableLabel">
            {
              tableLabel.map(item => (
                <div className="labelBox" key={item.id}>
                  <span>{item.label}</span>
                </div>
              ))
            }
          </div>
            <CustomerTable> 
              {
              data.map(item => (
                <CustomerRow key={item.id}>
                  <CustomerCell id='name'>
                    <Link to="/customer">
                  <StyledText text={item.name} size='sm' accent isClickable/>
                    </Link>
                  </CustomerCell >
                  <CustomerCell id='holder_name'>
                  <StyledText text={item.holder.name} size='sm' accent isClickable/>
                  </CustomerCell>
                  <CustomerCell id='order'>
                  <StyledText text={item.bns_model} size='sm' accent isClickable/>
                  </CustomerCell>
                  <CustomerCell id='deal'>
                  <StyledText text={item.bns_tag} size='sm' accent isClickable/>
                  </CustomerCell>
                  <RowIcon>
                  <OpenIcon  size={18} color={colors.actionColor}/>
                  </RowIcon>
                </CustomerRow>
              ))
              }
            </CustomerTable>
        </CustomerDataBox>
        <ContactFooter pageReference='index'/>
        </> :
        <div className="loadingContainer">
          <Lottie
          loop
          animationData={dgthus_loader}
          play
          style={{ width: 100, height: 100 }}
          />   
        </div>
          // <div className="ServerErrorContainer">
          //   <ConeServerErrorAnimation/>
          //   <div className="ServerErrorMessage">
          //     <StyledText text='Sem comunicação com o servidor.'/>
          //     <StyledText text='Tente mais tarde.' bold/>
          //   </div>
          //         <StyledButton label='REPORTAR' size='188px'/>
          // </div>
        }
      </Content>
      <PoweredContainer/>
    </Container>
  )
}

export default CustomersPage