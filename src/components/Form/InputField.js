import React from 'react';
import { FormField, FormFieldError, FormLabel } from './Elements.styled';

function InputFieldComponent({type, label, name, errors}) {
  return (
    <FormField>
      <FormLabel>{label}</FormLabel>
      <input name={name} type={type} />
      <FormFieldError>{errors}</FormFieldError>
    </FormField>
  )
}

export default React.memo(InputFieldComponent);
