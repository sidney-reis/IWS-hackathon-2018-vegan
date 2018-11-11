import React from 'react';
import styled from '@emotion/native';

import colors from '../constants/colors';
import { absoluteFill } from '../assets/styles/layoutStyles';

const Container = styled.View`
  flex-direction: row;
  width: 100%;
  height: 6px;
`;

const Counter = styled.View`
  flex: 1;
  height: 6px;
  margin: 0 5px;
  background-color: ${props =>
    props.completed ? colors.primary.base : colors.secondary.base};
`;

const WeeklyProgressBar = ({ style, completed }) => {
  return (
    <Container style={style}>
      {[...Array(7)].map((e, index) => (
        <Counter key={index} completed={index < completed} />
      ))}
    </Container>
  );
};

export default WeeklyProgressBar;
