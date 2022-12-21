import * as yup from "yup"

// Regrsa para um novo password
const passwordRules = /^(?=.*\  d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characteres, no mínimo 1 letra maiúscula, 1 letra minúscula, e um dígito

// loginSchema
export const LoginUserSchema = yup.object().shape({
  email: yup.string(),
  password: yup.string(),
})

export const RegisterNewUserSchema = yup.object().shape({
  email: yup.string().email("Preencha com o seu email").required(),
  password: yup.string().min(5).matches(passwordRules, {message: "Sua senha é fraca. Crie uma poderosa"}).required("Required"),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null, "senhas devem ser iguais"]).required("Required")
})

// Register Form
export const RegisterFormSchema = yup.object().shape({
  fullname: yup.string().min(4).required(),
  email: yup.string().email("Preencha com o seu email").required(),
  password: yup.string().min(5).matches(passwordRules, {message: "Sua senha é fraca. Crie uma poderosa"}).required("Required"),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null, "senhas devem ser iguais"]).required("Required")
})

export const RegisterNewCustumerSchema = yup.object().shape({
  name: yup.string().required(),
  bns_tag: yup.string().required(),
  bns_model: yup.string().required(),
  deal: yup.string().required()
})