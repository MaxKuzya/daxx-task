import styled from 'styled-components';
import { visuallyHiddenMixin } from '../../utils/style-mixins';

export const Section = styled.section`
    padding-top: 24px;
    padding-bottom: 24px;
`;

export const SectionTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 24px;
  ${({visuallyHidden}) => visuallyHidden && visuallyHiddenMixin()}
`;
