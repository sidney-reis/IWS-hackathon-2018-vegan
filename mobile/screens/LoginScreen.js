import React, { Component } from 'react';
import { css } from '@emotion/native';

import ScreenContainer from '../components/ScreenContainer';
import FormInput from '../components/FormInput';
import Button from '../components/Button';
import Logo from '../components/Logo';
import FormContainer from '../components/FormContainer';

export default class LoginScreen extends Component {
  state = {
    username: '',
    password: '',
    isRequesting: false,
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

    this.setState({ isRequesting: true }, async () => {
      //  TO-DO: call API
      try {
        const responseMock = await Promise.resolve({
          success: true,
          data: { token: 'myToken' }
        });
        console.log(navigation);
        navigation.navigate('Main', {
          token: responseMock.data.token
        });
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ isRequesting: false });
      }
    });
  };

  render() {
    const { username, password, isRequesting } = this.state;
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
        </FormContainer>
        <Button
          onPress={this.onSubmitForm}
          label="Login"
          style={{ marginTop: 87 }}
        />
      </ScreenContainer>
    );
  }
}
