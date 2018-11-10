import React from 'react';
import styled from 'styled-components';

import colors from '../constants/Colors';

const Text = styled.Text`
  color: #f00;
`;

export default props => {
  return <Text {...props} />;
};
