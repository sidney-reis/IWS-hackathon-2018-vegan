import React, { Component } from 'react';

import ScreenContainer from '../components/ScreenContainer';
import HomeScreenUserDetail from './HomeScreen/HomeScreenUserDetail';
import HomeScreenTip from './HomeScreen/HomeScreenTip';
import HomeScreenChallengeProgress from './HomeScreen/HomeScreenChallengeProgress';

const user = {
  username: 'jorge_antonio',
  currentLevel: 0,
  completedLevelChallenges: 2,
  currentChallenge: {
    title: 'Cows are friends',
    description: 'Do not eat red meat for at least 3 days this week.',
    impact:
      'You eat 30% less animal base products, this corresponds to 150 liters of water saved',
    amount: 3,
    theme: 'meat'
  },
  currentChallengeProgress: 2,
  completedChallenges: []
}

export default class HomeScreen extends Component {
  goToTips = challenge => {
    console.log(challenge);
    const { navigation } = this.props;
    navigation.navigate('ChallengeTips', { challenge });
  };

  render() {
    return (
      <ScreenContainer>
        <HomeScreenUserDetail user={user} collapsed />
        <HomeScreenTip tip="Chestnuts are rich in protein and vitamin D, important for calcium absorption." />
        <HomeScreenChallengeProgress
          user={user}
          goToTips={() => this.goToTips(user.state.currentChallenge)}
        />
      </ScreenContainer>
    );
  }
}
