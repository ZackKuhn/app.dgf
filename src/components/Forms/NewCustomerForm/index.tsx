import React, { useContext, useState } from 'react'

import { Field, Formik } from 'formik'

import { RegisterNewCustumerSchema } from '../../../services/FormValidations'

//import select options
import { bns_model_items, deal_items } from './SelectOptionsData'

import { SuccessfulAnimation } from '../../AnimatedComponents'
import {
  Container,
  StyledButton,
  StyledFormikForm,
  StyledFormikInput
} from './styles'

import AppContext from '../../../AppContext/Context'
import { StyledText } from '../../../styles/Texts'
// import StyledSelect from '../../StyledSelect';
import api from '../../../utils/api'
import StyledSelect from '../../StyledSelect'

interface FormValues {
  name: string
  bns_tag: string
  bns_model: string
  deal: string
}

const RegisterUserForm: React.FC<{}> = () => {
  const [goToConfirmation, setGoToConfirmation] = useState(false)
  const [what, setWhat] = useState('')
  const { setAnimState, setState, goToAnimState, setGoToAnim } =
    useContext(AppContext)

  const handleClick = () => {
    setGoToAnim({ goToAnim: true })
    setAnimState({ startAnim: true })
    setTimeout(() => {
      setState({ openModal: false })
      setGoToAnim({ goToAnim: false })
      setAnimState({ startAnim: false })
    }, 5000)
  }

  const RegisterInitValues: FormValues = {
    name: '',
    bns_tag: '',
    bns_model: '',
    deal: '',
  }

  const handleSubmit = (values: FormValues) => {
    api.post('/customers/create', values)
  }

  return (
    <Container>
      {!goToAnimState.goToAnim ? (
        <Formik
          initialValues={RegisterInitValues}
          onSubmit={(values, actions) => {
            handleSubmit(values)
            handleClick()
            actions.setSubmitting(false)
            actions.resetForm({
              values: {
                name: '',
                bns_tag: '',
                bns_model: '',
                deal: '',
              },
            })
          }}
          validationSchema={RegisterNewCustumerSchema}
        >
          {(FormikProps) => (
            <StyledFormikForm>
              <StyledFormikInput name="name" placeholder="Razão Social" />
              <StyledFormikInput
                name="bns_tag"
                placeholder="Setor de atuação "
              />
              <Field
                name={'bns_model'}
                component={StyledSelect}
                options={bns_model_items}
                placeholder="Modelo de negócios"
                />
              <Field
                name={'deal'}
                component={StyledSelect}
                options={deal_items}
                placeholder="Contrato"
                />
              <StyledButton type="submit">REGISTRAR</StyledButton>
            </StyledFormikForm>
          )}
        </Formik>
      ) : (
        <div className="LoaderContainer">
          {/* <Loader /> */}
          <SuccessfulAnimation />
          <StyledText
            text="Cliente cadastrado com sucesso"
            bold
            accent
            size="sm"
          />
        </div>
      )}
    </Container>
  )
}

export default RegisterUserForm
