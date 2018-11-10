import { css } from '@emotion/native';
import colors from '../../constants/Colors';

export const headerStyle = css`
  font-weight: 900;
`;

export const subHeaderStyle = css`
  color: ${colors.primary.base};
  font-weight: 300;
`;

export const smallTextStyle = css`
  font-size: 14px;
  font-weight: 300;
  color: ${colors.text.base};
`;
