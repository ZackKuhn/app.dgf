import React from 'react';
import { Formik } from 'formik';

import { RegisterFormSchema } from '../../../services/FormValidations';

import { Container, StyledButton, StyledFormikForm, StyledFormikInput } from './styles';

interface FormValues {
  email: string;
}

const ForgotUserForm: React.FC<{}> = () => {

  const ForgotInitValues: FormValues = {email: ''}

  return (
  <Container>
    <Formik
      initialValues={ForgotInitValues}
      onSubmit={(values, actions) => {
        console.log({ values, actions });
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
        actions.resetForm({values: {email: ''}})
        }}
        validationSchema={RegisterFormSchema}
    >{(FormikProps) => (
      <StyledFormikForm>
        <StyledFormikInput id="email" name="email" placeholder="Email" validatefailed={FormikProps.errors.email}/>
        <StyledButton type="submit" disabled={FormikProps.values.email.length && !FormikProps.errors.email ? true : false}>RECUPERAR</StyledButton>
      </StyledFormikForm> 
      )}
    </Formik>
  </Container>
  );
}

export default ForgotUserForm;