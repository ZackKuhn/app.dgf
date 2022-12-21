  import React, {} from 'react';
  import { Formik, ErrorMessage } from 'formik';

  import {RegisterFormSchema} from '../../../services/FormValidations'

  import { Container, StyledButton, StyledFormikForm, StyledFormikInput } from './styles';

  interface FormValues {
    fullname: string;
    email: string;
    password: string;
    confirmPassword: string;
  }

  const RegisterUserForm: React.FC<{}> = () => {

    const RegisterInitValues: FormValues = {
      fullname: '',
      email: '',
      password: '',
      confirmPassword: ''
    }

    return (
    <Container>
      <Formik
        initialValues={RegisterInitValues}
        validateOnChange
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(true);
          actions.resetForm({values: {
              fullname: '',
              email: '',
              password: '',
              confirmPassword: ''}})
          }}
          validationSchema={RegisterFormSchema}
          >{(FormikProps) => (
        <StyledFormikForm>
          <StyledFormikInput id="fullname" name="fullname" placeholder="Nome completo" validatefailed={FormikProps.errors.fullname}/>
          {
            FormikProps.errors.fullname && <ErrorMessage name='Deve ser maior que 4 caracteres'/>
          }
          <StyledFormikInput id="email" name="email" placeholder="Email" validatefailed={FormikProps.errors.email}/>
          <StyledFormikInput id="password" name="password" placeholder="Senha" validatefailed={FormikProps.errors.password && FormikProps.values.password != "" ? true : false}/> 
          <StyledFormikInput id="confirmPassword" name="confirmPassword" placeholder="Repita a senha" validatefailed={FormikProps.errors.confirmPassword && FormikProps.values.confirmPassword != "" ? true : false}/> 
          {/* <StyledButton type="submit" disabled={FormikProps.values.fullname.length && !FormikProps.errors.fullname && !FormikProps.errors.password && !FormikProps.errors.confirmPassword ? true : false}>REGISTRAR</StyledButton> */}
          <StyledButton type="submit" disabled={!FormikProps.isValid}>REGISTRAR</StyledButton>
        </StyledFormikForm> 
        )}
      </Formik>
    </Container>
    );
  }

  export default RegisterUserForm;