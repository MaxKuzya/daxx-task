// @ts-check
import React from 'react';
// Styles
import { Section } from './Section.styled';

function SectionComponent({ children }) {
  return <Section>{children}</Section>;
}

export default React.memo(SectionComponent);
