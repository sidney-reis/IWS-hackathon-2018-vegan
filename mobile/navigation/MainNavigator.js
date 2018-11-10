import { createStackNavigator } from 'react-navigation';

import WeekScreen from '../screens/WeekScreen';
import ResultScreen from '../screens/ResultScreen';

export default createStackNavigator(
  {
    Week: {
      screen: WeekScreen
    },
    Result: {
      screen: ResultScreen
    }
  },
  {
    initialRouteName: 'Result'
  }
);
