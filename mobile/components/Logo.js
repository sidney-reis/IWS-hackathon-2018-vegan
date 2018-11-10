import React from 'react';
import styled from '@emotion/native';

import Image from '../components/Image';

const sizes = {
  small: {
    width: 158,
    height: 34
  },
  base: {
    width: 287,
    height: 60
  }
};

const LogoImage = styled(Image)`
  height: ${props => sizes[props.size].height + 'px'};
  width: ${props => sizes[props.size].width + 'px'};
`;

const Logo = ({ style, size = 'small' }) => (
  <LogoImage
    style={style}
    source={require('../assets/images/logo.png')}
    resizeMode="contain"
    size={size}
  />
);

Logo.SIZES = {
  small: 'small',
  base: 'base'
};

export default Logo;
