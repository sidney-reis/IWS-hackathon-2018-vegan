import React from 'react';
import styled, { css } from '@emotion/native';

import Section from '../../components/Section';
import Text from '../../components/Text';
import Button from '../../components/Button';
import WeeklyProgressBar from '../../components/WeeklyProgressBar';

import { h1, h2, body } from '../../assets/styles/textStyles';
import colors from '../../constants/colors';

const WeekNumber = styled(Text)`
  ${h2};
  font-size: 18px;
  color: ${colors.primary.base};
`;

const ChallengeTitle = styled(Text)`
  ${h1};
  font-size: 24px;
  margin-bottom: 13px;
`;

const Description = styled(Text)`
  ${body};
  height: 64px;

  text-align: center;
`;

const HomeScreenChallengeProgress = ({ user, goToTips }) => {
  const { currentChallenge, currentChallengeProgress } = user.state;

  return (
    <Section>
      <WeekNumber capitalize>Week</WeekNumber>
      <ChallengeTitle capitalize>{currentChallenge.title}</ChallengeTitle>
      <Description>{currentChallenge.description}</Description>
      <Button label="Tips" onPress={goToTips} />
      <WeeklyProgressBar
        style={css`
          margin-top: 32px;
        `}
        completed={currentChallengeProgress}
      />
    </Section>
  );
};

export default HomeScreenChallengeProgress;
