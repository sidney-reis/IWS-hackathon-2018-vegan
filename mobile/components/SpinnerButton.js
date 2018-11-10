import React from 'react';
import styled from 'styled-components';

import { ActivityIndicator } from 'react-native';

import Text from '../components/Text';
import colors from '../constants/Colors';

const ButtonContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background-color: ${colors.background};
  padding: 3px 10px;
  height: 40px;
  width: 100%;
`;

const Label = styled(Text)`
  font-weight: 600;
`;

export default (SpinnerButton = ({ label, onPress, isLoading }) => {
  return (
    <ButtonContainer onPress={onPress}>
      <Label>{label}</Label>
      {isLoading && <ActivityIndicator />}
    </ButtonContainer>
  );
});
