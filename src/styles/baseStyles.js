import { css } from 'styled-components';

// Global styles
export const BaseStyles = ({ font }) => css`
  *,
  :after,
  :before {
    box-sizing: border-box;
  }

  html,
  body,
  main,
  #root {
    width: 100%;
    height: 100%;
  }
  

  body {
    display: flex;
    flex-direction: column;
    font-family: ${font.primary};
    
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: transparent;
  }
`;
