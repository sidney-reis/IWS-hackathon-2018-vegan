import React, { Component } from 'react';
import styled from '@emotion/native';
import { Subscribe } from 'unstated';

import ScreenContainer from '../components/ScreenContainer';
import HomeScreenUserDetail from './HomeScreen/HomeScreenUserDetail';
import HomeScreenTip from './HomeScreen/HomeScreenTip';

import UserContainer from '../state/UserContainer';

export default class HomeScreen extends Component {
  render() {
    return (
      <ScreenContainer>
        <Subscribe to={[UserContainer]}>
          {user => <HomeScreenUserDetail user={user} />}
        </Subscribe>
        <HomeScreenTip tip="Chestnuts are rich in protein and vitamin D, important for calcium absorption." />
      </ScreenContainer>
    );
  }
}
