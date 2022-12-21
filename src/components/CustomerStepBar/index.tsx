import React, { useContext, useEffect, useState } from 'react';

import { GoSync as SyncIcon } from 'react-icons/go';
import { CustomerDataTypes } from '../../utils/dataTypes';

//services imports
import { AxiosError } from 'axios';
import api from '../../utils/api';

// Styled Components

import DGModal from '../Modals/DGModal';
import { Container, Content } from './styles';

import AppContext from '../../AppContext/Context';
import { colors } from '../../styles/Colors';
import NewCustomerForm from '../Forms/NewCustomerForm';
import StepMap from '../StepMap';

const CustomerStepBar: React.FC = () => {

  const [loadingData, setLoadingData] = useState(false)
  const [data, setCustomerData] = useState<CustomerDataTypes[]>([])

  const { state, setState: setModalState } = useContext(AppContext)

  const handleAction = ()=>{
    setModalState({openModal: true})
  }

  useEffect(() => {
    api.get('/customers').then(response => {
      setCustomerData(response.data);
      setLoadingData(true);
    }).catch(function(error: any){
      console.log(AxiosError.ERR_BAD_REQUEST)
    })
  }, [state])
  
  return (
    <Container>
      <Content>
        {
          state.openModal &&
          <DGModal title='Novo Cliente' barTimmer>
            <NewCustomerForm/>
          </DGModal>
        }
        <div className="ActionNavBar">
          <div className="LeftSide">  
            <SyncIcon size={22} color={colors.actionColor}/>
            <h1 id="ActionTitleBox">Step</h1>
          </div>
          <div className="RightSide"/>
        </div>
        <div className="ActionItems" id='Customers box'>
          <StepMap label='onboarding' number='1' checkedstate/>
          <StepMap label='planejamento' number='2' checkedstate/>
          <StepMap label='otimização' number='3' checkedstate/>
          <StepMap label='escala' number='4' />
        </div>
      </Content>
    </Container>
  );
}

export default CustomerStepBar;