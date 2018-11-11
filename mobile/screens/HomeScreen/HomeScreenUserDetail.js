import React from 'react';
import styled, { css } from '@emotion/native';

import { h1, h3 } from '../../assets/styles/textStyles';
import colors from '../../constants/colors';

import Avatar from '../../components/Avatar';
import Section from '../../components/Section';
import Text from '../../components/Text';

const Username = styled(Text)`
  ${h1};
  margin-top: 10px;
  font-size: 20px;
`;

const CompletedChallenges = styled(Text)`
  ${h3};
  color: ${colors.primary.base};
  font-size: 17px;
`;

const HomeScreenUserDetail = ({ user }) => {
  const { username, completedChallenges } = user.state;

  return (
    <Section>
      <Avatar
        style={css`
          margin-top: 20px;
        `}
      />
      <Username>{username}</Username>
      <CompletedChallenges>{`${
        completedChallenges.length
      } challenges concluded`}</CompletedChallenges>
    </Section>
  );
};

export default HomeScreenUserDetail;
