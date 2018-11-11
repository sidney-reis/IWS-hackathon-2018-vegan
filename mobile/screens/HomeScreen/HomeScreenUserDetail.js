import React from 'react';
import { LayoutAnimation } from 'react-native';
import styled, { css } from '@emotion/native';

import { h1, h3 } from '../../assets/styles/textStyles';
import colors from '../../constants/colors';

import Avatar from '../../components/Avatar';
import Section from '../../components/Section';
import Text from '../../components/Text';

const TextWrapper = styled.View`
  margin-left: ${props => (props.collapsed ? 20 : 0) + 'px'};
`;

const Username = styled(Text)`
  ${h1};
  margin-top: 10px;
  font-size: 20px;
  text-align: center;
`;

const CompletedChallenges = styled(Text)`
  ${h3};
  color: ${colors.primary.base};
  font-size: 17px;
`;

const UserDetail = ({ user, collapsed }) => {
  const { username, completedChallenges } = user;

  return (
    <Section horizontal={collapsed} hasShadow={collapsed}>
      <Avatar
        style={css`
          margin-top: 20px;
        `}
        size={collapsed ? Avatar.SIZES.small : Avatar.SIZES.base}
      />
      <TextWrapper collapsed={collapsed}>
        <Username>{username}</Username>
        <CompletedChallenges>{`${
          completedChallenges.length
        } challenges concluded`}</CompletedChallenges>
      </TextWrapper>
    </Section>
  );
};

export default UserDetail;
