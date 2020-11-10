import { colors } from './colors';

// Breakpoints declarations
export const breakpoints = {
  xxl: 1600,
  xl: 1200,
  lg: 992,
  md: 768,
  sm: 576,
  xs: 575,
  zero: 0,
};

// Font declaration
export const font = {
  primary: 'Roboto, sans-serif',
  light: '300',
  regular: '400',
  medium: '500',
  bold: '700',
};

export const padding = {
  desktop: '24px',
};

// Component theme helper
export const styledTheme = {
  font,
  colors,
  breakpoints,
};
