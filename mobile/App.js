import React from 'react';
import { UIManager } from 'react-native';
import AppNavigator from './navigation/AppNavigator';

import { Provider } from 'unstated';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  render() {
    return (
      <Provider>
        <AppNavigator />
      </Provider>
    );
  }
}
