import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// input com formato monetário
import { formatValue } from 'react-currency-input-field';

// Elementos de estilização complementares
import { StyledText } from '../../../styles/Texts';
import { colors } from '../../../styles/Colors';
import { Container, Content, CustomerDataBox, CustomerHeader, EditPageTitle, CustomerPageDivider } from './styles';

//Components
import EditCustomerForm from '../../../components/Forms/EditCustomerForm';
import NavBar from '../../../components/NavBar';
import PoweredContainer from '../../../components/PoweredContainer';

//icons
import { CustomerDgIcon } from '../../../assets/Icons';

//Loading da página
import Loader from '../../../components/Loader';

import api from '../../../utils/api';
import { CustomerDataTypes } from '../../../utils/dataTypes';

const CustomerEditPage: React.FC = () => {

  const [isLoading, setLoading] = useState(false)
  const [customerData, setData] = useState<CustomerDataTypes[]>([])

  const { customerId } = useParams();

  const apiRoute: string = `customers/${customerId}`
  
  useEffect(() => {
    api.get(apiRoute).then(response => {
      setData(response.data);})
      setLoading(true)
}, [])

    const feeValue = formatValue({
      value: customerData.map(item => item.fee).toString(),
      groupSeparator: '.',
      decimalSeparator: ',',
      prefix: 'R$ ',
    });

    return (
    <Container>
      <NavBar />
      <Content>
        {
          customerData.map(customer => (
                isLoading ? <div key={customer.id}>
                <CustomerPageDivider key={customer.id}>
                <div className="UserLabel">
                </div>
                </CustomerPageDivider>
                {/* <ClosedBox /> */}
                <CustomerHeader>
                <div className="LogoBox">
                  <CustomerDgIcon/>
                </div>
                <div className="CustomerInfo">
                  <EditPageTitle>
                    <StyledText text="Editar informações" accent bold size='xl'/>
                  </EditPageTitle>
                </div>
                <div className="RightBox"></div>
                </CustomerHeader>
              <CustomerDataBox>
                  <div className="DataBox">
                    <div className="DataHeader">
                      <StyledText text='Dados' size='sm' bold accent/>
                      <StyledText text='Atualizar informações' size='sm'/>
                    </div>
                    <div className="DataSetContainer">
                    <EditCustomerForm/>
                    </div>
                  </div>
              </CustomerDataBox>
              </div> :
              <Loader/>
              ))
        }
        </Content>
      <PoweredContainer/>
    </Container>
  )
}

export default CustomerEditPage