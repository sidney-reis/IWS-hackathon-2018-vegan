import React, { Component } from 'react';
import { Subscribe } from 'unstated';

import ScreenContainer from '../components/ScreenContainer';
import HomeScreenUserDetail from './HomeScreen/HomeScreenUserDetail';
import HomeScreenTip from './HomeScreen/HomeScreenTip';
import HomeScreenChallengeProgress from './HomeScreen/HomeScreenChallengeProgress';

import UserContainer from '../state/UserContainer';

export default class HomeScreen extends Component {
  render() {
    return (
      <Subscribe to={[UserContainer]}>
        {user => (
          <ScreenContainer>
            <HomeScreenUserDetail user={user} />
            <HomeScreenTip tip="Chestnuts are rich in protein and vitamin D, important for calcium absorption." />
            <HomeScreenChallengeProgress user={user} />
          </ScreenContainer>
        )}
      </Subscribe>
    );
  }
}
