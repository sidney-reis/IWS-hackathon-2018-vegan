import { createSwitchNavigator } from 'react-navigation';

import MainNavigator from './MainNavigator';
import LoginScreen from '../screens/LoginScreen';

export default createSwitchNavigator(
  {
    Login: LoginScreen,
    Main: MainNavigator
  },
  {
    initialRouteName: 'Main'
  }
);
