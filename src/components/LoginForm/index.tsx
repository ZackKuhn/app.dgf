import React, { FormEvent, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Form, Formik } from 'formik';

import AppContext from '../../AppContext/Context';

import { LoginUserSchema } from '../../services/FormValidations';
import { ClickableText, Container, Footer, FooterContent, Header, InputBox, LabelText, LineIcon, LoginActionsBox, LoginButton, LoginOptionsBox } from './styles';
import StyledInput from '../StyledInput';

interface FormikValues {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const {userTokenData, setUserTokenData} = useContext(AppContext)

  const initialValues: FormikValues = { email: "", password: ""};

  const handleCatch = (values: FormikValues) =>{
    setUserTokenData({...userTokenData, 'email': values.email.toString()})
    localStorage.clear()
    }

  return (
    <Container>
      <Header>
        <LabelText>HEAD QUARTER</LabelText>
      </Header>
      <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        // alert(JSON.stringify(values, null, 2));
        handleCatch(values)
        actions.setSubmitting(false);
        actions.resetForm({
          values: {
            email: '',
            password: ''
          }})
      }}
      validationSchema ={LoginUserSchema}
    >{(FormikProps) => (
      <Form>
      <InputBox>
      <StyledInput
        id="email"
        name="email"
        icon="email"
        placeholder="Seu email"
      />
      <StyledInput
        id="password"
        name="password"
        password
        icon="pass"
        placeholder="senha"
      />
      </InputBox>
            <LoginOptionsBox>
              <Link to="/forgot">
              <ClickableText>{userTokenData.email}</ClickableText>
              </Link>
            </LoginOptionsBox>
            <LoginActionsBox>
              <Link to={`/home/${userTokenData.id}`}>
                <LoginButton type="submit">ENTRAR</LoginButton>
              </Link>
            </LoginActionsBox>
          </Form>
          )}
        </Formik>
      <Footer>
        <LineIcon>
          <div className="LineIcon"/> 
        </LineIcon>
        <FooterContent>
          <h1>Novo no squad?</h1>
          <Link to="/register">
            <ClickableText>Solicite acesso</ClickableText>
          </Link>
        </FooterContent>
      </Footer>
    </Container>
  )
}

export default LoginForm;