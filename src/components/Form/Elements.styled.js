import styled from 'styled-components';
import { styledTheme } from '../../constants/styled-theme';

export const FormSubmit = styled.button`
  border: none;
  border-radius: 3px;
  padding: 4px 16px;
  cursor: pointer;
  color: ${styledTheme.colors.white};
  background-color: ${styledTheme.colors.accent};
  transition: 100ms ease-out background-color;
  
  &:hover,
  &:focus {
    background-color: ${styledTheme.colors.accentInteraction};
  }
`;

export const FormField = styled.label`
  display: block;
  margin-bottom: 24px;
`;

export const FormLabel = styled.div`
  font-size: 12px;
  max-width: 200px;
  margin-bottom: 4px;
`;

export const FormFieldError = styled.p`
  position: absolute;
  color: ${styledTheme.colors.red};
  font-size: 8px;
`;

