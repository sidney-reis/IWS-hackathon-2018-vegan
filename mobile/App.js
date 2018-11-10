import React from 'react';
import AppNavigator from './navigation/AppNavigator';

import { Provider } from 'unstated';

export default class App extends React.Component {
  render() {
    return (
      <Provider>
        <AppNavigator />
      </Provider>
    );
  }
}
