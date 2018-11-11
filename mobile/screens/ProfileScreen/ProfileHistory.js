import React from 'react';
import { FlatList } from 'react-native';
import styled, { css } from '@emotion/native';

import { h1, body } from '../../assets/styles/textStyles';

import Section from '../../components/Section';
import Card from '../../components/Card';
import Text from '../../components/Text';
import Icon from '../../components/Icon';
import { alignContentCenter } from '../../assets/styles/layoutStyles';

const Title = styled(Text)`
  ${h1};
  font-size: 17px;
  margin-bottom: 10px;
  text-align: center;
`;

const Description = styled(Text)`
  ${body};
  font-size: 13px;
  text-align: center;
`;

const TopRightContainer = styled.View`
  position: absolute;
  top: 18px;
  right: 18px;
`;

const Progress = styled.Text`
  ${h1};
  font-size: 14px;
  color: ${colors.primary.base};
`;

const ProfileHistory = ({ user }) => {
  const {
    completedChallenges,
    currentChallenge,
    currentChallengeProgress
  } = user;

  const progress = (currentChallengeProgress / currentChallenge.amount) * 100;

  return (
    <FlatList
      data={completedChallenges}
      renderItem={({ item }) => (
        <Card
          style={css`
            ${alignContentCenter};
            height: 140px;
          `}
        >
          <TopRightContainer>
            <Icon name="check" size={18} />
          </TopRightContainer>
          <Title capitalize>{item.title}</Title>
          <Description>{item.description}</Description>
        </Card>
      )}
      ListHeaderComponent={
        <Card
          style={css`
            ${alignContentCenter};
            height: 140px;
          `}
        >
          <TopRightContainer>
            <Progress>{(progress + '').substring(0, 4) + '%'}</Progress>
          </TopRightContainer>
          <Title capitalize>{currentChallenge.title}</Title>
          <Description>{currentChallenge.description}</Description>
        </Card>
      }
      keyExtractor={item => item.title}
    />
  );
};

export default ProfileHistory;
