import React from 'react';
import styled, { css } from '@emotion/native';

import { h1 } from '../../assets/styles/textStyles';

import Avatar from '../../components/Avatar';
import Section from '../../components/Section';
import Text from '../../components/Text';

const Username = styled(Text)`
  ${h1};
  margin-top: 10px;
  font-size: 20px;
`;

const ProfileHeader = ({ user }) => {
  const { username } = user;

  return (
    <Section hasShadow>
      <Avatar
        style={css`
          margin-top: 20px;
        `}
      />
      <Username>{username}</Username>
    </Section>
  );
};

export default ProfileHeader;
