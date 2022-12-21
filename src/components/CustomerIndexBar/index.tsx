import React, { useContext, useEffect, useState } from 'react';

// React Components
import StyledButton from '../StyledButton';
import CustomerCard from '../CustomerCard';

import { AddClientIcon } from '../../assets/Icons';
import { CustomerDataTypes } from '../../utils/dataTypes';

//services imports
import api from '../../utils/api';
import { AxiosError } from 'axios';

// Styled Components

import DGModal from '../Modals/DGModal';
import { Container, Content } from './styles';

import AppContext from '../../AppContext/Context'
import NewCustomerForm from '../Forms/NewCustomerForm';

const CustomerIndexBar: React.FC = () => {

  const [loadingData, setLoadingData] = useState(false)
  const [data, setCustomerData] = useState<CustomerDataTypes[]>([])

  const { state, setState: setModalState, userTokenData } = useContext(AppContext)

  const handleAction = ()=>{
    setModalState({openModal: true})
  }

  useEffect(() => {
    api.get('/customers').then(response => {
      setCustomerData(response.data);
      setLoadingData(true);
    }).catch(() => {
      console.log(AxiosError.ERR_BAD_RESPONSE)
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
            <h1 id="ActionTitleBox">Clientes</h1>
          <AddClientIcon onClick={() => handleAction()}/>
          </div>
          <div className="RightSide"/>
        </div>
        <div className="ActionItems" id='Customers box'>
          {
            data.map(item =>(
              <CustomerCard key={item.id} customerName={item.name} holderName={item.holder.name} param={item.id}/>
            ))
          }
        </div>
        <div className="ActionOptions">
          <StyledButton label="VER TODOS" link={`/customers/${userTokenData.id}`} size='132px'/>
        </div>
      </Content>
    </Container>
  );
}

export default CustomerIndexBar;