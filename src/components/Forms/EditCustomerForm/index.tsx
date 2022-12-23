import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Formik, Field } from 'formik';

import { RegisterNewCustumerSchema } from '../../../services/FormValidations';


import { SuccessfulAnimation } from '../../AnimatedComponents';
import { Container, StyledButton, StyledFormikForm, StyledFormikInput } from './styles';

import AppContext from '../../../AppContext/Context';
import api from '../../../utils/api';
import { CustomerDataTypes } from '../../../utils/dataTypes';
import StyledSelect from '../../StyledSelect';
import { step_items } from './EditCustomerOptions';

interface FormValues {
  name: string
}

const spec = [
  {
    id: 1,
    value: 'C-LEVEL'
  },
  {
    id: 2,
    value: 'HEADER LEADER'
  },
  {
    id: 3,
    value: 'DGSOLDIER'
  }
];


const EditCustomerForm: React.FC<{}> = () => {

  const { customerId } = useParams();
  const [customerData, setData] = useState<CustomerDataTypes[]>([]);
  const [loading, setLoading] = useState(false);
  const [editValue, setEditValue] = useState(false);
  const apiRoute: string = `customers/${customerId}`

  const [goToConfirmation, setGoToConfirmation] = useState(false)
  const { setAnimState, setState, goToAnimState, setGoToAnim } = useContext(AppContext)

  // const handleClick = ()=> {
  //   setGoToAnim({goToAnim: true});
  //   setAnimState({startAnim: true});
  //   setTimeout(() => {
  //     setState({openModal: false})
  //     setGoToAnim({goToAnim: false});
  //     setAnimState({startAnim: false});
  //   }, 5000);
  // }

  const customerInitValues: FormValues = {
    name: '',
  }

  useEffect(() => {
    api.get(apiRoute).then(response => {
      setData(response.data);})
      setLoading(true)
}, [])

  return (
  <Container>
    {
      !goToAnimState.goToAnim ?
      <Formik
      initialValues={customerInitValues}
      onSubmit={(values, actions) => {
        console.log({ values, actions });
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
        actions.resetForm({values: {
          name: '',
          }})
          console.log(values)
        }}
        validationSchema={RegisterNewCustumerSchema}
        >{(FormikProps) => (
      <StyledFormikForm>
        {
                customerData.map(customer =>(
                  <>
                  <StyledFormikInput id="name" name="name" placeholder="Razão Social" value={customer.name}/>
                  <StyledFormikInput id="deal" name="deal" placeholder="Contrato" value={customer.deal}/>
                  <Field name={'bns_model'} component={StyledSelect} options={step_items} placeholder="Step do projeto"/>
                  <StyledFormikInput id="step" name="step" placeholder="Step" value={customer.step}/>
                  <StyledButton type="submit">SALVAR</StyledButton>
                  </>
         ))
        }
         
      </StyledFormikForm>
      )}
    </Formik> :  
      <div className="LoaderContainer">
       {/* <Loader /> */}
      <SuccessfulAnimation />
      </div>
    }
  </Container>
  )
}

export default EditCustomerForm;

       
  // fee          
  // str_name     
  // str_email    
  // str_contact  
  // mkt_email    
  // sales_phone  
  // folder_link  
  // bnsplan_link 
  // payment_day  
  // ticket       
  // margin       
  // media_budget 
  // media_invest 
  // tools_invest 
  // mont_income  
  // sales        
  // bns_model    
  // bns_tag      
  // flag         
  // rating       
  // core         
  // status       