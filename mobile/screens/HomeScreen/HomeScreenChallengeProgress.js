import React, { Fragment } from 'react';
import styled, { css } from '@emotion/native';

import Section from '../../components/Section';
import Text from '../../components/Text';
import Button from '../../components/Button';
import WeeklyProgressBar from '../../components/WeeklyProgressBar';

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

const Description = styled(Text)`
  ${body};
  height: 64px;

  text-align: center;
`;

const Question = styled(Text)`
  ${h2};
  font-size: 18px;
  margin-bottom: 15px;
`;

const HomeScreenChallengeProgress = ({
  user,
  goToTips,
  onGiveFeedback,
  questionsLeft
}) => {
  const { currentChallenge, currentChallengeProgress } = user;

  const ordinals = [
    'first',
    'second',
    'third',
    'fourth',
    'fifth',
    'sixth',
    'last'
  ];

  return (
    <Section>
      <WeekNumber capitalize>Week</WeekNumber>
      <ChallengeTitle capitalize>{currentChallenge ? currentChallenge.title : ''}</ChallengeTitle>
      <Description>{currentChallenge ? currentChallenge.description : ''}</Description>
      {questionsLeft && (
        <Fragment>
          <Question>{`How was your ${
            ordinals[currentChallengeProgress]
          } day?`}</Question>
          <Button
            style={css`
              margin-bottom: 10px;
            `}
            label="I got it!"
            onPress={() => onGiveFeedback(true)}
          />
          <Button
            style={css`
              margin-bottom: 10px;
            `}
            label="Not yet, but I will!!"
            onPress={() => onGiveFeedback(false)}
            color="secondary"
            variant="darker"
          />
        </Fragment>
      )}
      {!questionsLeft && <Button label="Tips" onPress={goToTips} />}
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
