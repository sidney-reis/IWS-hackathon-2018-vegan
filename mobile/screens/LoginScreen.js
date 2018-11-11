import React, { Component } from 'react';
import { css } from '@emotion/native';
import { ActivityIndicator } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import FormInput from '../components/FormInput';
import Button from '../components/Button';
import Logo from '../components/Logo';
import FormContainer from '../components/FormContainer';
import LoginContainer from '../state/UserContainer';
import UserService from '../services/User';
import ChallengeService from '../services/Challenge';
import Text from '../components/Text';

class LoginScreen extends Component {
  state = {
    username: '',
    password: '',
    error: null
  };

  onUpdateUsername = username => {
    this.setState({ username });
  };

  onUpdatePassword = password => {
    this.setState({ password });
  };

  onSubmitForm = async () => {
    const { username, password } = this.state;
    const { navigation } = this.props;

    this.props.startLoading();
    try {
      const resp = await UserService.login({username, password});
      const {user} =  resp.data;
      this.props.setUser(user);
      if (user.currentLevel === 0 && !user.currentChallenge) {
        const resp = await ChallengeService.getInitialChallenges();
        this.props.stopLoading();
        console
        navigation.navigate('ChallengeSelect', {challengesToPick: resp.data.challenges});
      } else if (!user.currentChallenge) {
        const resp = await ChallengeService.nextChallenges();
        navigation.navigate('ChallengeSelect', {challengesToPick: resp.data.challenges});
      } else {
        this.props.stopLoading();
        navigation.navigate('Home');
      }
    } catch (error) {
      this.props.stopLoading();
      this.setState({ error });
    }
  };

  render() {
    const { username, password } = this.state;
    return (
      <ScreenContainer
        style={css`
          align-items: center;
          justify-content: center;
        `}
        statusBarStyle="light-content"
        source={require('../assets/images/login_bg.png')}
      >
        <Logo
          size={Logo.SIZES.base}
          style={css`
            margin-bottom: 47;
          `}
        />
        {this.props.loading ? <ActivityIndicator /> :
        <FormContainer>
          <FormInput
            value={username}
            placeholder="Username"
            onChangeText={this.onUpdateUsername}
          />
          <FormInput
            value={password}
            placeholder="Password"
            onChangeText={this.onUpdatePassword}
            secureTextEntry
          />
        </FormContainer>}
        <Button
          onPress={this.onSubmitForm}
          label="Login"
          style={{ marginTop: 87 }}
        />
        {!!this.state.error && <Text>Invalid username or password</Text>}
      </ScreenContainer>
    );
  }
}

export default LoginContainer(LoginScreen);
