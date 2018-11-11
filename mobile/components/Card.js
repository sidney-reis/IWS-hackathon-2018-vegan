import React from 'react';
import styled from '@emotion/native';

import colors from '../constants/colors';

const Wrapper = styled.View`
  padding: 13px 35px;
`;

const Container = styled.View`
  padding: 13px 25px;
  border-radius: 10px;
  background-color: ${colors.background.base};
  shadow-color: #d5d5d5;
  shadow-offset: 5px 8px;
  shadow-radius: 12px;
  elevation: 7;
`;

const Card = ({ children, style }) => (
  <Wrapper>
    <Container style={style}>{children}</Container>
  </Wrapper>
);

export default Card;
