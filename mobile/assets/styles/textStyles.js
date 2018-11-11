import { css } from '@emotion/native';
import colors from '../../constants/colors';

export const h1 = css`
  font-weight: 900;
`;

export const h2 = css`
  font-weight: 500;
`;

export const h3 = css`
  font-weight: 300;
`;

export const body = css`
  font-size: 16px;
  color: ${colors.text.light};
`;

export const small = css`
  font-size: 14px;
  font-weight: 300;
  color: ${colors.text.base};
`;
