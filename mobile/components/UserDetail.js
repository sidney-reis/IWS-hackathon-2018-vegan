import React from 'react';
import styled, { css } from '@emotion/native';

import { h1, h3 } from '../assets/styles/textStyles';
import colors from '../constants/colors';

import Avatar from '../components/Avatar';
import Section from '../components/Section';
import Text from '../components/Text';

const TextWrapper = styled.View`
  margin-left: ${props => (props.horizontal ? 20 : 0) + 'px'};
`;

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

const UserDetail = ({ user, horizontal }) => {
  LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  const { username, completedChallenges } = user.state;

  return (
    <Section horizontal={horizontal}>
      <Avatar
        style={css`
          margin-top: 20px;
        `}
        size={horizontal ? Avatar.SIZES.small : Avatar.SIZES.base}
      />
      <TextWrapper horizontal={horizontal}>
        <Username>{username}</Username>
        <CompletedChallenges>{`${
          completedChallenges.length
        } challenges concluded`}</CompletedChallenges>
      </TextWrapper>
    </Section>
  );
};

export default UserDetail;
