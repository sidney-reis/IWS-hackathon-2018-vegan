import React, { Fragment } from 'react';
import styled, { css } from '@emotion/native';

import Section from '../../components/Section';
import Text from '../../components/Text';
import Icon from '../../components/Icon';
import Button from '../../components/Button';

import { h1, h2, body, h3 } from '../../assets/styles/textStyles';
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

const Impact = styled(Text)`
  ${body};
  text-align: center;
  font-size: 16px;
  margin: 30px 0px;
`;

const HomeScreenChallengeProgress = ({
  currentChallenge,
  isSuccessful,
  goToSelectChallenge
}) => {
  return (
    <Section>
      <WeekNumber capitalize>Week</WeekNumber>
      <ChallengeTitle capitalize>{currentChallenge.title}</ChallengeTitle>
      <Icon name={isSuccessful ? 'success' : 'fail'} />
      <Impact>{currentChallenge.impact}</Impact>
      <Button label="Select challenge" onPress={goToSelectChallenge} />
    </Section>
  );
};

export default HomeScreenChallengeProgress;
