import React, { Component } from 'react';
import styled from 'styled-components/native';

import colors from '../constants/Colors';

const TextInput = styled.TextInput`
  height: 40px;
  background-color: rgba(255, 255, 255, 0.8);
  border: 0;
  border-radius: 4px;
  color: ${colors.text};
  padding: 0 12px;
`;

const FormInput = ({
  value,
  placeholder,
  secureTextEntry,
  style,
  onChangeText
}) => {
  return (
    <TextInput
      value={value}
      placeholder={placeholder}
      placeholderTextColor={`${colors.text}99`}
      secureTextEntry={secureTextEntry}
      style={style}
      onChangeText={onChangeText}
    />
  );
};

export default FormInput;
