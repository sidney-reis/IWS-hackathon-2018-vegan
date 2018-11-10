import React from 'react';
import styled from 'styled-components';

import { ActivityIndicator } from 'react-native';

import IconImage from './Image';
import colors from '../constants/Colors';

const IconContainer = styled.TouchableOpacity`
  width: ${props => props.size};
  height: ${props => props.size};
`;

const IconImage = styled(IconImage)`
  font-weight: 600;
  color: ${colors.background.base};
  width: ${props => props.size};
  height: ${props => props.size};
`;

const Icon = ({ onPress, style, size = 32, source }) => {
  return (
    <IconContainer style={style} onPress={onPress} size={size}>
      <IconImage size={size} source={source} />
    </IconContainer>
  );
};
