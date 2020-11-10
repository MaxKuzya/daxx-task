import styled from 'styled-components';
import { visuallyHiddenMixin } from '../../utils/style-mixins';

export const UI = styled.div`

`;

export const PageTitle = styled.h1`
  ${({visuallyHidden}) => visuallyHidden && visuallyHiddenMixin()}
`
