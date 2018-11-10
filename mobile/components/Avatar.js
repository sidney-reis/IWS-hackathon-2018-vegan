import React from 'react';
import styled from '@emotion/native';

import Image from '../components/Image';

const sizes = {
  small: 58,
  base: 96
};

const LogoImage = styled(Image)`
  height: ${props => sizes[props.size]};
  width: ${props => sizes[props.size]};
`;

const Avatar = ({ style, source, size = Avatar.SIZES.base }) => {
  const placeholder = require('../assets/images/iconPerson.png');
  return (
    <LogoImage
      style={style}
      source={source || placeholder}
      resizeMode="contain"
      size={size}
    />
  );
};

Avatar.SIZES = {
  small: 'small',
  base: 'base'
};

export default Avatar;
