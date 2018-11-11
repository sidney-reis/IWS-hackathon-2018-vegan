import React from 'react';
import styled from '@emotion/native';

import Image from './Image';
import Text from './Text';

import colors from '../constants/colors';
import icons from '../assets/icons';
import { h1 } from '../assets/styles/textStyles';

const IconContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

const IconImage = styled(Image)`
  width: ${props => props.size};
  height: ${props => props.size};
`;

const Label = styled(Text)`
  ${h1};
  margin-left: 16px;
  font-size: 17px;
`;

const Icon = ({ onPress, style, size = 32, name, label }) => {
  const source = icons[name];

  return (
    <IconContainer
      style={style}
      onPress={onPress}
      size={size}
      activeOpacity={0.5}
    >
      <IconImage size={size} source={source} resizeMode="contain" />
      {label && <Label>{label}</Label>}
    </IconContainer>
  );
};

export default Icon;
