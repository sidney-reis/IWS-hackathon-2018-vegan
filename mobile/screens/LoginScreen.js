import React, { Component } from 'react';

import ScreenContainer from '../components/ScreenContainer';
import FormInput from '../components/FormInput';
import Button from '../components/Button';
import Image from '../components/Image';
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
        style={{
          alignItems: 'center',
          justifyContent: 'center'
        }}
        source={require('../assets/images/login_bg.png')}
      >
        <Image
          style={{ marginBottom: 47 }}
          source={require('../assets/images/logo.png')}
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
          isLoading={isRequesting}
          label="Login"
          style={{ marginTop: 87 }}
        />
      </ScreenContainer>
    );
  }
}
