import React from 'react';
import styled from '@emotion/native';
import { LinearGradient } from 'expo';

import colors from '../constants/colors';

const Wrapper = styled.View``;

const Container = styled.View`
  flex-direction: ${props => (props.horizontal ? 'row' : 'column')};
  align-items: center;
  justify-content: center;
  padding: 24px;
  background-color: ${props => colors.background[props.backgroundVariant]};
`;

const Section = ({
  children,
  backgroundVariant = 'base',
  style,
  wrapperStyle,
  hasShadow,
  horizontal
}) => (
  <Wrapper style={wrapperStyle}>
    <Container
      style={style}
      resizeMode="cover"
      backgroundVariant={backgroundVariant}
      horizontal={horizontal}
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
