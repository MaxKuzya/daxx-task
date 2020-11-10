// @ts-check
import React from 'react';
// Styles
import { Container } from './Container.styled';

function ContainerComponent({ children }) {
  return <Container>{children}</Container>;
}

export default React.memo(ContainerComponent);
