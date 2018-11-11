import React, { Component, Fragment } from 'react';
import ChallengeTipsHeader from './ChallengeTipsScreen/ChallengeTipsHeader';

import ScreenContainer from '../components/ScreenContainer';
import Placeholder from '../components/Placeholder';

export default class ChallengeTipsScreen extends Component {
  render() {
    const challenge = this.props.navigation.getParam('challenge', null);

    return (
      <ScreenContainer>
        {challenge ? (
          <Fragment>
            <ChallengeTipsHeader challenge={challenge} />
          </Fragment>
        ) : (
          <Placeholder message="Sorry, we couldn't fetch the tips. :(" />
        )}
      </ScreenContainer>
    );
  }
}
