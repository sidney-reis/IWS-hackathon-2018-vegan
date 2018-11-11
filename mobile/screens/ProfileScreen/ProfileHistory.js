import React from 'react';
import { FlatList } from 'react-native';
import styled, { css } from '@emotion/native';

import { h1, body } from '../../assets/styles/textStyles';

import Section from '../../components/Section';
import Card from '../../components/Card';
import Text from '../../components/Text';
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

const ProfileHistory = ({ user }) => {
  const { completedChallenges } = user;

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
          <Title capitalize>{item.title}</Title>
          <Description>{item.description}</Description>
        </Card>
      )}
      keyExtractor={item => item.title}
    />
  );
};

export default ProfileHistory;
