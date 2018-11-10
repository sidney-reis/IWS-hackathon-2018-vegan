import React, { Component } from 'react';
import styled from 'styled-components/native';

import colors from '../constants/Colors';

const Container = styled.View`
  width: 80%;
  padding: 4px;
`;

const FormContainer = ({ children, style }) => {
  return <Container style={style}>{children}</Container>;
};

export default FormContainer;
