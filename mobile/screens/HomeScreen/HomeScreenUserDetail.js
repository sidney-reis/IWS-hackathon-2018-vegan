import React from 'react';
import styled, { css } from '@emotion/native';

import Avatar from '../../components/Avatar';
import Section from '../../components/Section';
import Text from '../../components/Text';
import { headerStyle, subHeaderStyle } from '../../assets/styles/Text';

const Username = styled(Text)`
  ${headerStyle};
  margin-top: 10px;
  font-size: 20px;
`;

const CompletedChallenges = styled(Text)`
  ${subHeaderStyle};
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
