import React from 'react';
import styled from '@emotion/native';

import colors from '../constants/colors';
import { absoluteFill } from '../assets/styles/layoutStyles';

const Container = styled.View`
  flex-direction: row;
  width: 100%;
  height: 6px;
  background-color: ${colors.secondary.base};
`;

const Progress = styled.View`
  width: ${props => (props.completed / 7) * 100 + '%'};
  height: 6px;
  background-color: ${colors.primary.base};
`;

const SeparatorContainer = styled.View`
  ${absoluteFill};
  flex-direction: row;
  justify-content: space-evenly;
`;

const Separator = styled.View`
  width: 10px;
  height: 6px;
  background-color: ${colors.background.base};
`;

const WeeklyProgressBar = ({ style, completed }) => {
  return (
    <Container style={style}>
      <Progress completed={completed} />
      <SeparatorContainer>
        {[...Array(6)].map((e, i) => (
          <Separator key={i} />
        ))}
      </SeparatorContainer>
    </Container>
  );
};

export default WeeklyProgressBar;
