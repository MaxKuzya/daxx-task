import { css } from 'styled-components';

// Helper Mixin for center elements vertically
export const centeredY = (pos = 'absolute') => css`
  position: ${pos};
  top: 50%;
  transform: translateY(-50%);
`;

// Helper Mixin for center elements horizontally
export const centeredX = (pos = 'absolute') => css`
  position: ${pos};
  left: 50%;
  transform: translateX(-50%);
`;

// Helper Mixin for center elements vertically & horizontally
export const centeredXY = (pos = 'absolute') => css`
  position: ${pos};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

// Helper to make content stretched in all sides
export const stretchContent = () => css`
  display: flex;
  flex: 1 0 auto;
`;

// Helper provided flex column behaviour
export const flexColumn = () => css`
  ${stretchContent()};
  flex-direction: column;
`;

export const visuallyHiddenMixin = () => css`
  position: absolute !important;
  clip: rect(1px, 1px, 1px, 1px);
  padding:0 !important;
  border:0 !important;
  height: 1px !important; 
  width: 1px !important; 
  overflow: hidden;
`
