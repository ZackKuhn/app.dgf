import React, { useState, useContext } from 'react';

import { Formik } from 'formik';

import { RegisterNewCustumerSchema } from '../../../services/FormValidations';

//import animation

import { SuccessfulAnimation } from '../../AnimatedComponents';
import { Container, StyledButton, StyledFormikForm, StyledFormikInput } from './styles';

import AppContext from '../../../AppContext/Context';

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

const EditUserInProfileForm: React.FC<{}> = () => {

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

  const RegisterInitValues: FormValues = {
    name: '',
  }

  return (
  <Container>
    {
      !goToAnimState.goToAnim ?
      <Formik
      initialValues={RegisterInitValues}
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
        <StyledFormikInput id="name" name="name" placeholder="Nome completo"/>
        <StyledFormikInput id="nickname" name="nickname" placeholder="Nick name"/>
        <StyledFormikInput id="email" name="email" placeholder="Email"/>
        <StyledFormikInput id="Contato" name="Contato" placeholder="Email"/>
        <StyledButton type="submit">SALVAR</StyledButton>
        {/* <StyledButton type="submit" onClick={handleClick}>REGISTRAR</StyledButton> */}
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

export default EditUserInProfileForm;