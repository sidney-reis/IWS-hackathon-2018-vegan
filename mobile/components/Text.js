import React from 'react';
import styled from '@emotion/native';

import colors from '../constants/colors';

const StyledText = styled.Text`
  color: ${colors.text.base};
`;

const Text = ({ children, capitalize, ...props }) => {
  return (
    <StyledText {...props}>
      {capitalize ? children.toUpperCase() : children}
    </StyledText>
  );
};

export default Text;
