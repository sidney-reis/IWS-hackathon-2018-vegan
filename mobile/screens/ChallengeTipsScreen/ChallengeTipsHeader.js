import React from 'react';
import styled, { css } from '@emotion/native';

import { h1, h3 } from '../../assets/styles/textStyles';
import colors from '../../constants/colors';

import Section from '../../components/Section';
import Text from '../../components/Text';

const Tips = styled(Text)`
  ${h3};
  font-size: 18px;
  color: ${colors.primary.base};
`;

const ChallengeName = styled(Text)`
  ${h1};
  font-size: 24px;
`;

const ChallengeTipsHeader = ({ challenge }) => {
  const { title } = challenge;

  return (
    <Section hasShadow>
      <Tips>Tips</Tips>
      <ChallengeName capitalize>{title}</ChallengeName>
    </Section>
  );
};

export default ChallengeTipsHeader;
