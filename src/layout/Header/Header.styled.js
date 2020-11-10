import styled, { css } from 'styled-components';

/**
 * APP_BAR
 */
export const AppBar = styled.header(
  ({ theme: { colors} }) => css`
    background: ${colors.primary1};
  `,
);
