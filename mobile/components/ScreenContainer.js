import React from 'react';
import { StatusBar } from 'react-native';
import styled from '@emotion/native';

import colors from '../constants/colors';

const ImageContainer = styled.ImageBackground`
  flex: 1;
  background-color: ${colors.background.base};
`;

export default ({
  children,
  style,
  source,
  statusBarStyle = 'dark-content',
  statusBarColor = 'transparent',
  statusBarTransparent = true
}) => (
  <ImageContainer style={style} resizeMode="cover" source={source}>
    <StatusBar
      barStyle={statusBarStyle}
      backgroundColor={statusBarColor}
      translucent={statusBarTransparent}
    />
    {children}
  </ImageContainer>
);
