import React from 'react';
import { UIManager } from 'react-native';
import { Provider } from 'react-redux';
import AppNavigator from './navigation/AppNavigator';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <AppNavigator />
      </Provider>
    );
  }
}
