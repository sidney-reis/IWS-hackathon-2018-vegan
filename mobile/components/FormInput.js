import React, { Component } from 'react';
import styled from 'styled-components/native';

import colors from '../constants/Colors';

const TextInput = styled.TextInput`
  width: 100%;
  padding: 12px 17px;
  margin-bottom: 16px;
  border-width: 1px;
  border-radius: 10px;
  border-color: ${colors.text.light};
  background-color: rgba(255, 255, 255, 0.8);
  color: ${colors.text.light};
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
      placeholderTextColor={`${colors.text.base}99`}
      secureTextEntry={secureTextEntry}
      style={style}
      onChangeText={onChangeText}
    />
  );
};

export default FormInput;
