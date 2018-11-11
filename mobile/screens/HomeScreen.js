import React, { Component } from 'react';
import { SecureStore } from 'expo';
import dayjs from 'dayjs';

import ScreenContainer from '../components/ScreenContainer';
import HomeScreenUserDetail from './HomeScreen/HomeScreenUserDetail';
import HomeScreenTip from './HomeScreen/HomeScreenTip';
import HomeScreenChallengeProgress from './HomeScreen/HomeScreenChallengeProgress';
import HomeScreenConcluded from './HomeScreen/HomeScreenConcluded';

export default class HomeScreen extends Component {
  state = {
    user: {
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
      currentChallengeProgress: 0,
      completedChallenges: [],
      currentChallengeStart: new Date(),
      currentChallengeSuccess: 4
    }
  };

  goToTips = challenge => {
    console.log(challenge);
    const { navigation } = this.props;
    navigation.navigate('ChallengeTips', { challenge });
  };

  goToSelectChallenge = challenge => {
    console.log(challenge);
    const { navigation } = this.props;
    navigation.navigate('ChallengeTips', { challenge });
  };

  onGiveFeedback = success => {
    this.setState(
      state => ({
        user: {
          ...state.user,
          currentChallengeProgress: state.user.currentChallengeProgress
        }
      }),
      async () => {
        await SecureStore.setItemAsync(
          'currentChallengeProgress',
          this.state.currentChallengeProgress + 1
        );

        if (success) {
          const success = SecureStore.getItemAsync('currentChallengeSuccess');

          await SecureStore.setItemAsync(
            'currentChallengeSuccess',
            success + 1
          );
        }
      }
    );
  };

  render() {
    const { user } = this.state;

    const startDate = dayjs(user.currentChallengeStart);
    const currentDay = dayjs().diff(startDate, 'days');
    const isComplete = true;

    const hasPendingDays = currentDay - user.currentChallengeProgress > 0;

    console.log(currentDay);

    return (
      <ScreenContainer>
        <HomeScreenUserDetail
          user={user}
          collapsed={hasPendingDays || isComplete}
        />
        {!hasPendingDays && !isComplete && (
          <HomeScreenTip tip="Chestnuts are rich in protein and vitamin D, important for calcium absorption." />
        )}
        {!isComplete && (
          <HomeScreenChallengeProgress
            user={user}
            currentDay={currentDay}
            goToTips={() => this.goToTips(user.currentChallenge)}
            onGiveFeedback={this.onGiveFeedback}
          />
        )}
        {isComplete && (
          <HomeScreenConcluded
            currentChallenge={user.currentChallenge}
            goToSelectChallenge={this.goToSelectChallenge}
            isSuccessfull={true}
          />
        )}
      </ScreenContainer>
    );
  }
}
