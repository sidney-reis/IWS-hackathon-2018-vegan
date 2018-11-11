import React from 'react';
import styled from '@emotion/native';
import { LinearGradient } from 'expo';

import colors from '../constants/colors';

const Wrapper = styled.View``;

const Container = styled.View`
  padding: 24px;
  align-items: center;
  justify-content: center;
  background-color: ${props => colors.background[props.backgroundVariant]};
  elevation: ${props => (props.hasShadow ? '6' : '0')};
`;

const Section = ({
  children,
  backgroundVariant = 'base',
  style,
  wrapperStyle,
  hasShadow
}) => (
  <Wrapper style={wrapperStyle}>
    <Container
      style={style}
      resizeMode="cover"
      backgroundVariant={backgroundVariant}
    >
      {children}
    </Container>
    {hasShadow && (
      <LinearGradient
        colors={['#9E9E9E66', 'transparent']}
        style={{ height: 15 }}
      />
    )}
  </Wrapper>
);

export default Section;
