import React, { Component } from 'react';
import styled, { css } from 'styled-components/native';

import colors from '../constants/Colors';

const ImageContainer = styled.ImageBackground`
  flex: 1;
  background-color: ${colors.background.base};
`;

export default ({ children, style, source }) => (
  <ImageContainer style={style} resizeMode="cover" source={source}>
    {children}
  </ImageContainer>
);
