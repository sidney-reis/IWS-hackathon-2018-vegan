import React, { Component } from 'react';

import ScreenContainer from '../components/ScreenContainer';
import HomeScreenUserDetail from './HomeScreen/HomeScreenUserDetail';
import HomeScreenTip from './HomeScreen/HomeScreenTip';
import HomeScreenChallengeProgress from './HomeScreen/HomeScreenChallengeProgress';
import UserContainer from '../state/UserContainer';

class HomeScreen extends Component {
  goToTips = challenge => {
    const { navigation } = this.props;
    navigation.navigate('ChallengeTips', { challenge });
  };

  render() {
    const user = {...this.props.user, currentChallengeProgress: 2};
    return (
      <ScreenContainer>
        <HomeScreenUserDetail user={user} collapsed />
        <HomeScreenTip tip="Chestnuts are rich in protein and vitamin D, important for calcium absorption." />
        <HomeScreenChallengeProgress
          user={user}
          goToTips={() => this.goToTips(user.currentChallenge)}
        />
      </ScreenContainer>
    );
  }
}

export default UserContainer(HomeScreen);
