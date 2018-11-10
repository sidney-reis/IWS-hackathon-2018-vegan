import React from 'react';
import styled from '@emotion/native';

import Text from './Text';
import colors from '../constants/Colors';

const ButtonContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 180px;
  height: 44px;
  border-radius: 22px;
  background-color: ${colors.primary.base};
  padding: 3px 10px;
  height: 40px;
  shadow-color: #d5d5d5;
  shadow-offset: 5px 8px;
  shadow-radius: 12px;
  elevation: 7;
`;

const Label = styled(Text)`
  font-weight: 600;
  color: ${colors.background.base};
`;

const Button = ({ label, onPress, style, isLoading }) => {
  return (
    <ButtonContainer style={style} onPress={onPress}>
      <Label>{label}</Label>
    </ButtonContainer>
  );
};

export default Button;
