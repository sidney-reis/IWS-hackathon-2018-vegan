import React, { Component } from 'react';
import styled, { css } from 'styled-components';

import ScreenContainer from '../components/ScreenContainer';
import FormInput from '../components/FormInput';
import SpinnerButton from '../components/SpinnerButton';
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
        source={require('../assets/images/bg-blur.jpg')}
        centerContent
      >
        <FormContainer>
          <FormInput
            value={username}
            placeholder="Username"
            onChangeText={this.onUpdateUsername}
            style={{ marginBottom: 5 }}
          />
          <FormInput
            value={password}
            placeholder="Password"
            onChangeText={this.onUpdatePassword}
            secureTextEntry
            style={{ marginBottom: 5 }}
          />
          <SpinnerButton
            onPress={this.onSubmitForm}
            isLoading={isRequesting}
            label="Login"
          />
        </FormContainer>
      </ScreenContainer>
    );
  }
}
