import React, { Component } from 'react';
import { Subscribe } from 'unstated';

import ScreenContainer from '../components/ScreenContainer';
import UserDetail from '../components/UserDetail';

import UserContainer from '../state/UserContainer';

export default class HomeScreen extends Component {
  render() {
    return (
      <Subscribe to={[UserContainer]}>
        {user => (
          <ScreenContainer>
            <UserDetail user={user} horizontal />
          </ScreenContainer>
        )}
      </Subscribe>
    );
  }
}
