import React, { useContext, useEffect, useState } from 'react';

import { Field, Formik } from 'formik';

import { RegisterNewCustumerSchema } from '../../../services/FormValidations';

//import select options 
import { bns_model_items, deal_items } from './SelectOptionsData'

import { SuccessfulAnimation } from '../../AnimatedComponents';
import { Container, StyledButton, StyledFormikForm, StyledFormikInput } from './styles';

import AppContext from '../../../AppContext/Context';
import { StyledText } from '../../../styles/Texts';
import api from '../../../utils/api';
import { CustomerDataTypes } from '../../../utils/dataTypes';

interface FormValues {
  title: string
  description: string
  deadline: string
  priority: String
}

const users = [
  { value: 'Ezequias Kuhn', label: 'Ezequias Kuhn' },
  { value: 'Julio Oliveira', label: 'Julio Oliveira' },
  { value: 'Lucas Guimaraes', label: 'Lucas Guimaraes' }
];

const NewTaskForm: React.FC<{}> = () => {

  const [goToConfirmation, setGoToConfirmation] = useState(false)
  const [what, setWhat] = useState('');
  const [isLoading, setLoading] = useState(false)
  const { setAnimState, setState, goToAnimState, setGoToAnim } = useContext(AppContext)

  const [data, setData] = useState<CustomerDataTypes[]>([])

  useEffect(()=>{
    api.get('/customers').then(response => {
      setData(response.data);
      setLoading(true);})
  },[])

  const handleClick = ()=> {
    setGoToAnim({goToAnim: true});
    setAnimState({startAnim: true});
    setTimeout(() => {
      setState({openModal: false})
      setGoToAnim({goToAnim: false});
      setAnimState({startAnim: false});
    }, 5000);
  }

  const RegisterInitValues: FormValues = {
    title: '',
    description: '',
    deadline: '',
    priority: '',
  }

  const handleSubmit = (values: FormValues)=>{
    api.post("/customers/create", values)
  }

  return (
  <Container>
    {
      !goToAnimState.goToAnim ?
      <Formik
      initialValues={RegisterInitValues}
      onSubmit={(values, actions) => {
        handleSubmit(values)
        handleClick()
        actions.setSubmitting(false);
        actions.resetForm({values: {
            title: '',
            description: '',
            deadline: '',
            priority: '',
          }})
        }}
        
        validationSchema={RegisterNewCustumerSchema}
        >{(FormikProps) => (
      <StyledFormikForm>
        {/* <Field name={'holder'} component={StyledSelect} options={users} placeholder="Holder"/> */}
        <StyledFormikInput name="title" placeholder="Título da task"/>
        <StyledFormikInput name="description" placeholder="Descrição"/>
        {/* <Field name={'bns_model'} component={StyledSelect} options={} placeholder="Modelo de negócios"/>
        <Field name={'deal'} component={StyledSelect} options={deal_items} placeholder="Contrato"/> */}
        <StyledButton type="submit">REGISTRAR</StyledButton>  
      </StyledFormikForm>
      )}
    </Formik> : 
      <div className="LoaderContainer">
       {/* <Loader /> */}
      <SuccessfulAnimation />
      <StyledText text='Cliente cadastrado com sucesso' bold accent size='sm'/>
      </div>
    }
  </Container>
  )
}

export default NewTaskForm;