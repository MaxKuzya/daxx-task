import styled from 'styled-components';
import {styledTheme} from '../../constants/styled-theme';

export const Form = styled.form`
  background-color: ${styledTheme.colors.bg};
  padding: 24px;
  box-shadow: 0 3px 5px 0 ${styledTheme.colors.shadowBlack};
  border: 2px solid ${styledTheme.colors.lightGray};
  border-radius: 5px;
`;

