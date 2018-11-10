import React, { Component } from 'react';
import styled from 'styled-components/native';

import ScreenContainer from '../components/ScreenContainer';
import Text from '../components/Text';

const Title = styled(Text)`
  font-size: 32px;
  color: black;
  padding: 20px;
`;

export default class ResultScreen extends Component {
  render() {
    const { result } = this.props;

    return (
      <ScreenContainer>
        <Title>{result}</Title>
      </ScreenContainer>
    );
  }
}
