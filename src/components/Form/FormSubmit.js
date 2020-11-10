import React from 'react';
import { FormSubmit } from './Elements.styled';

function FormSubmitComponent({ children }) {
  return (
    <FormSubmit name="submit" type='submit'>{children}</FormSubmit>
  );
}

export default React.memo(FormSubmitComponent);
