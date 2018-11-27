import React, { Component } from 'react';
import { SecureStore } from 'expo';

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
    questionsLeft: 7,
  };

  async componentDidMount() {
    const currentChallengeSuccess = await SecureStore.getItemAsync(
      `${this.props.user._id}currentChallengeSuccess`,
    );
    const currentChallengeProgress = await SecureStore.getItemAsync(
      `${this.props.user._id}currentChallengeProgress`,
    );
    this.setState({
      currentChallengeSuccess: Number(currentChallengeSuccess),
      currentChallengeProgress: Number(currentChallengeProgress),
    });
  }

  goToTips = (challenge) => {
    const { navigation } = this.props;
    navigation.navigate('ChallengeTips', { challenge });
  };

  goToSelectChallenge = () => {
    const { navigation } = this.props;
    this.setState({ questionsLeft: 7, currentChallengeProgress: 0, currentChallengeSuccess: 0 });
    navigation.navigate('ChallengeSelect', { challengesToPick: this.state.newChallenges });
  };

  onGiveFeedback = (success) => {
    this.setState(
      state => ({
        currentChallengeProgress: state.currentChallengeProgress + 1,
        questionsLeft: state.questionsLeft - 1,
      }),
      async () => {
        try {
          await SecureStore.setItemAsync(
            `${this.props.user._id}currentChallengeProgress`,
            `${this.state.currentChallengeProgress}`,
          );

          if (success) {
            const currentChallengeSuccess = this.state.currentChallengeSuccess;
            this.setState(
              state => ({
                currentChallengeSuccess: state.currentChallengeSuccess + 1,
              }),
              async () => {
                try {
                  await SecureStore.setItemAsync(
                    `${this.props.user._id}currentChallengeSuccess`,
                    `${currentChallengeSuccess + 1}`,
                  );
                } catch (err) {
                  console.log(err);
                }
              },
            );
          }
          if (!this.state.questionsLeft) {
            const resp = await UserService.weekResult({ userId: this.props.user._id, amount: this.state.currentChallengeSuccess });
            this.setState({ newChallenges: resp.data.newChallenges[0] });
          }
        } catch (err) {
          console.log(err);
        }
      },
    );
  };

  render() {
    const user = { ...this.props.user, ...this.state };
    const { questionsLeft } = this.state;

    return (
      <ScreenContainer>
        <HomeScreenUserDetail
          user={user}
          collapsed={!questionsLeft}
        />
        {!!questionsLeft && (
          <HomeScreenTip tip="Chestnuts are rich in protein and vitamin D, important for calcium absorption." />
        )}
        {!!questionsLeft && (
          <HomeScreenChallengeProgress
            user={user}
            questionsLeft={questionsLeft}
            goToTips={() => this.goToTips(user.currentChallenge)}
            onGiveFeedback={this.onGiveFeedback}
          />
        )}
        {!questionsLeft && (
          <HomeScreenConcluded
            currentChallenge={user.currentChallenge}
            goToSelectChallenge={this.goToSelectChallenge}
            isSuccessful={
              user.currentChallenge.amount <= user.currentChallengeSuccess
            }
          />
        )}
      </ScreenContainer>
    );
  }
}

export default UserContainer(HomeScreen);
