import React from 'react';
import { Form } from './Form.styled';

function FormComponent({children, onSubmit}) {
  return (
    <Form onSubmit={onSubmit}>
      {children}
    </Form>
  );
}

export default React.memo(FormComponent);
