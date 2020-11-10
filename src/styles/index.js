import { createGlobalStyle, css } from 'styled-components';
import { BaseStyles } from './baseStyles';
import { ResetStyles } from './resetStyles';

// Base styles
export const GlobalStyles = createGlobalStyle(
  ({ theme }) => css`
    /** --- RESET STYLES --- **/
    ${ResetStyles(theme)};
    /** --- BASE STYLES --- **/
    ${BaseStyles(theme)};
  `,
);
