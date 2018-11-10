import React, { Component } from 'react';
import styled from 'styled-components/native';

import ScreenContainer from '../components/ScreenContainer';
import Text from '../components/Text';

const Title = styled(Text)`
  font-size: 32px;
  color: black;
  padding: 20px;
`;

export default class WeekScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Week ${navigation.getParam('weekNumber', 0)}`
  });

  static defaultProps = {
    objective: 'Evitar carne por 3 dias nessa semana'
  };

  render() {
    const { objective } = this.props;

    return (
      <ScreenContainer>
        <Title>{objective}</Title>
      </ScreenContainer>
    );
  }
}
