import React, { Component } from "react";
import styled, { css } from "styled-components/native";

import colors from "../constants/Colors";

const containerStyle = css`
  flex: 1;
  align-items: ${props => (props.centerContent ? "center" : "flex-start")};
  justify-content: ${props => (props.centerContent ? "center" : "flex-start")};
  background-color: ${colors.background};
`;

const Container = styled.View`
  ${containerStyle}
`;

const ImageContainer = styled.ImageBackground`
  ${containerStyle}
`;

export default ({ children, centerContent, source }) =>
  source ? (
    <ImageContainer resizeMode="cover" source={source}>
      {children}
    </ImageContainer>
  ) : (
    <Container centerContent={centerContent}>{children}</Container>
  );
