import React, { Component } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import ProfileHeader from './ProfileScreen/ProfileHeader';
import UserContainer from '../state/UserContainer';
import Card from '../components/Card';
import styled, { css } from '@emotion/native';
import { alignContentCenter } from '../assets/styles/layoutStyles';
import Text from '../components/Text';
import { h1, body } from '../assets/styles/textStyles';
import ChallengesServices from '../services/Challenge'

const Title = styled(Text)`
  ${h1};
  font-size: 17px;
  margin-bottom: 10px;
  text-align: center;
`;

const Description = styled(Text)`
  ${body};
  font-size: 13px;
  text-align: center;
`;

class ChallengeSelectScreen extends Component {
  handleClick = async (challenge) => {
    try {
      this.props.startLoading();
      const userId = this.props.user._id;
      const resp = await ChallengesServices.pickChallenge({userId, challengeId: challenge._id});
      this.props.setUser(resp.data)
      this.props.stopLoading();
      this.props.navigation.navigate('Home');
    } catch (err) {
      console.log(err);
      this.props.stopLoading();
    }
  }

  render() {
    return (
      <ScreenContainer>
        <ProfileHeader user={this.props.user} />
        {this.props.loading ? <ActivityIndicator /> :
        <FlatList
          data={this.props.navigation.getParam('challengesToPick', [])}
          renderItem={({ item }) => (
            <Card
              onPress={() => this.handleClick(item)}
              style={css`
                ${alignContentCenter};
                height: 140px;
              `}
            >
              <Title capitalize>{item.title || ''}</Title>
              <Description>{item.description}</Description>
            </Card>
          )}
          keyExtractor={item => item.title}
        />}
      </ScreenContainer>
    );
  }
}

export default UserContainer(ChallengeSelectScreen);
