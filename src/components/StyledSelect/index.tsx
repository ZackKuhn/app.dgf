import { FieldProps } from 'formik'
import React from 'react'
import Option from 'react-select'
import ReactSelectProps from 'react-select'
import StateManagedSelect from 'react-select/dist/declarations/src/stateManager'

import {StyledSelectComponent} from './styles'

const StyledSelect: React.FC<ReactSelectProps & FieldProps> = ({
  options,
  field,
  form,
  placeholder
}) => (
  <StyledSelectComponent
    classNamePrefix="react-select"
    options={options}
    name={field.name}
    value={options ? options.find((option: { value: any }) => option.value === field.value) : ''}
    onChange={(option: Option) => form.setFieldValue(field.name, option.value)}
    onBlur={field.onBlur}
    placeholder={placeholder}
  />
)

export default StyledSelect