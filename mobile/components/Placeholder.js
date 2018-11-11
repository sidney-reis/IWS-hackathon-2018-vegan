import React from 'react';
import styled from '@emotion/native';

import colors from '../constants/colors';
import { h1 } from '../assets/styles/textStyles';

const Container = styled.View`
  padding: 24px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.background.base};
`;

const Message = styled.Text`
  ${h1}
`;

const Placeholder = ({ message }) => (
  <Container>
    <Message>{message}</Message>
  </Container>
);

export default Placeholder;
