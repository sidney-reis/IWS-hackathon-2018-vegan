import React from 'react';
import styled, { css } from '@emotion/native';

import Section from '../../components/Section';
import Text from '../../components/Text';
import Icon from '../../components/Icon';
import { smallTextStyle } from '../../assets/styles/Text';

const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px 34px;
`;

const Tip = styled(Text)`
  ${smallTextStyle};
`;

const HomeScreenTip = ({ tip }) => {
  return (
    <Section backgroundVariant="darker" hasShadow>
      <Row>
        <Icon
          name="tip"
          size={40}
          style={css`
            margin-right: 12px;
          `}
        />
        <Tip>{tip}</Tip>
      </Row>
    </Section>
  );
};

export default HomeScreenTip;
