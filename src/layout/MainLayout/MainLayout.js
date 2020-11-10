import React from 'react';
// Styles
import { MainLayout } from './MainLayout.styled';
import { GlobalStyles } from '../../styles';

/**
 * Main Layout component
 */
function MainLayoutComponent({ children }) {
  return (
    <MainLayout>
      <GlobalStyles />
      {children}
    </MainLayout>
  );
}

export default React.memo(MainLayoutComponent);
