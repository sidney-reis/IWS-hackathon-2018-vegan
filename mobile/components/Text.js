import React from 'react';
import styled from '@emotion/native';

import colors from '../constants/Colors';

const Text = styled.Text`
  color: ${colors.text.base};
`;

export default props => {
  return <Text {...props} />;
};
