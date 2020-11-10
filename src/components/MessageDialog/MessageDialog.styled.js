import styled, { keyframes } from 'styled-components';

const appear = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -16px);
  } 
  to {
    opacity: 1;
    transform: translate(-50%);
  }
`;

export const MessageDialog = styled.div`
  position: fixed;
  top: 24px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(170,221,255, 0.9);
  padding: 12px 24px;
  border-radius: 5px;
  animation: ${appear} 300ms ease;
`;
