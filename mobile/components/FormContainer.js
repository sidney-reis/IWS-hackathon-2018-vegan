import React, { Component } from 'react';
import styled from '@emotion/native';

import colors from '../constants/colors';

const Container = styled.View`
  width: 80%;
  padding: 4px;
`;

const FormContainer = ({ children, style }) => {
  return <Container style={style}>{children}</Container>;
};

export default FormContainer;
