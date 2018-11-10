import React from 'react';
import styled from '@emotion/native';

import Image from './Image';
import colors from '../constants/Colors';
import icons from '../assets/icons';

const IconContainer = styled.TouchableOpacity`
  width: ${props => props.size};
  height: ${props => props.size};
`;

const IconImage = styled(Image)`
  width: ${props => props.size};
  height: ${props => props.size};
`;

const Icon = ({ onPress, style, size = 32, name }) => {
  const source = icons[name];

  return (
    <IconContainer style={style} onPress={onPress} size={size}>
      <IconImage size={size} source={source} resizeMode="contain" />
    </IconContainer>
  );
};

export default Icon;
