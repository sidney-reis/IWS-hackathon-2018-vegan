import React, { Component } from 'react';
import { SecureStore } from 'expo';
import dayjs from 'dayjs';

import ScreenContainer from '../components/ScreenContainer';
import HomeScreenUserDetail from './HomeScreen/HomeScreenUserDetail';
import HomeScreenTip from './HomeScreen/HomeScreenTip';
import HomeScreenChallengeProgress from './HomeScreen/HomeScreenChallengeProgress';
import UserContainer from '../state/UserContainer';
import HomeScreenConcluded from './HomeScreen/HomeScreenConcluded';
import UserService from '../services/User';

class HomeScreen extends Component {
  state = {
    currentChallengeProgress: 0,
    currentChallengeSuccess: 0,
    newChallenges: [],
    incrementerForTest: 0
  };

  async componentDidMount() {
    const currentChallengeSuccess = await SecureStore.getItemAsync(
      `${this.props.user._id}currentChallengeSuccess`
    );
    const currentChallengeProgress = await SecureStore.getItemAsync(
      `${this.props.user._id}currentChallengeProgress`
    );
    this.setState({
      currentChallengeSuccess: Number(currentChallengeSuccess),
      currentChallengeProgress: Number(currentChallengeProgress)
    });
  }

  goToTips = challenge => {
    const { navigation } = this.props;
    this.setState(state => ({ incrementerForTest: state.incrementerForTest + 1}))
  };

  goToSelectChallenge = () => {
    console.log(this.state.newChallenges);
    const { navigation } = this.props;
    navigation.navigate('ChallengeSelect', { challengesToPick: this.state.newChallenges });
  };

  onGiveFeedback = (success, isLast) => {
    this.setState(
      state => ({
        currentChallengeProgress: state.currentChallengeProgress + 1,
      }),
      async () => {
        try {
          await SecureStore.setItemAsync(
            `${this.props.user._id}currentChallengeProgress`,
            `${this.state.currentChallengeProgress}`
          );

          if (success) {
            const currentChallengeSuccess = this.state.currentChallengeSuccess;
            this.setState(
              state => ({
                currentChallengeSuccess: state.currentChallengeSuccess + 1
              }),
              async () => {
                try {
                  await SecureStore.setItemAsync(
                    `${this.props.user._id}currentChallengeSuccess`,
                    `${currentChallengeSuccess + 1}`
                  );
                } catch (err) {
                  console.log(err);
                }
              }
            );
          }
          if(isLast) {
            console.log('>>>>>>>> last:', isLast);
            const resp = await UserService.weekResult({userId: this.props.user._id, amount: this.state.currentChallengeSuccess });
            this.setState({ newChallenges: resp.data.newChallenges });
          }
        } catch (err) {
          console.log(err);
        }
      }
    );
  };

  render() {
    const user = { ...this.props.user, ...this.state };

    const startDate = dayjs(user.currentChallengeStart);
    const currentDay = dayjs().diff(startDate, 'days');
    const isComplete = currentDay  + user.incrementerForTest >= 7;
    // console.warn(isComplete)
    // const isComplete = true;

    const hasPendingDays = currentDay - user.currentChallengeProgress > 0;

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
        {isComplete && !hasPendingDays && (
          <HomeScreenConcluded
            currentChallenge={user.currentChallenge}
            goToSelectChallenge={this.goToSelectChallenge}
            isSuccessfull={
              user.currentChallenge.amount <= user.currentChallengeSuccess
            }
          />
        )}
      </ScreenContainer>
    );
  }
}

export default UserContainer(HomeScreen);
