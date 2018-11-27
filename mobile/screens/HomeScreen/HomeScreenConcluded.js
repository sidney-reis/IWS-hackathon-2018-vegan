import React, { Component, Fragment } from 'react';
import styled, { css } from '@emotion/native';
import { SecureStore } from 'expo';

import Section from '../../components/Section';
import Text from '../../components/Text';
import Icon from '../../components/Icon';
import Button from '../../components/Button';

import UserContainer from '../../state/UserContainer';

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

const Titlao = styled(Text)`
  margin-top: 15px;
  font-size: 35px;
  font-weight: 900;
  color: ${colors.primary.base};
`;


class HomeScreenChallengeProgress extends Component {
  async componentDidMount() {
    setTimeout(async () => {
      await SecureStore.deleteItemAsync(`${this.props.user._id}currentChallengeProgress`);
      await SecureStore.deleteItemAsync(`${this.props.user._id}currentChallengeSuccess`);
    }, 1000);
  }

  render() {
    const { currentChallenge,
      isSuccessful,
      goToSelectChallenge
    } = this.props;

    return (
      <Section>
        <WeekNumber capitalize>Week</WeekNumber>
        <ChallengeTitle capitalize>{currentChallenge.title}</ChallengeTitle>
        {console.log(isSuccessful)}
        <Icon name={isSuccessful ? 'success' : 'fail'} />
        <Titlao capitalize>{isSuccessful ? 'You got it!' : 'Almost there!'}</Titlao>
        <Impact>{currentChallenge.impact}</Impact>
        <Button label="Select challenge" onPress={goToSelectChallenge} />
      </Section>
    );
  }
};

export default UserContainer(HomeScreenChallengeProgress);
