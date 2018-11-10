import React from 'react';
import styled, { css } from '@emotion/native';

import Avatar from '../../components/Avatar';
import Section from '../../components/Section';
import Text from '../../components/Text';
import { headerStyle, subHeaderStyle } from '../../assets/styles/Text';

const Name = styled(Text)`
  ${headerStyle};
  margin-top: 10px;
  font-size: 20px;
`;

const CompletedChallenges = styled(Text)`
  ${subHeaderStyle};
  font-size: 17px;
`;

const HomeScreenUserDetail = ({ user }) => {
  const { name, completedChallenges } = user.state;

  return (
    <Section>
      <Avatar
        style={css`
          margin-top: 20px;
        `}
      />
      <Name>{name}</Name>
      <CompletedChallenges>{`${completedChallenges} challenges concluded`}</CompletedChallenges>
    </Section>
  );
};

export default HomeScreenUserDetail;
