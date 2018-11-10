import React from 'react';
import { createStackNavigator } from 'react-navigation';
import styled from '@emotion/native';

import WeekScreen from '../screens/WeekScreen';
import ResultScreen from '../screens/ResultScreen';
import HomeScreen from '../screens/HomeScreen';

import Icon from '../components/Icon';
import Logo from '../components/Logo';

export default createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerLeft: <Icon name="menu" size={22} />,
        headerTitle: <Logo size="small" />,
        headerRight: <Icon name="profile" size={32} />
      }
    },
    Week: {
      screen: WeekScreen
    },
    Result: {
      screen: ResultScreen
    }
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        elevation: 0
      },
      headerLeftContainerStyle: {
        marginLeft: 12
      },
      headerRightContainerStyle: {
        marginRight: 12
      },
      headerTitleContainerStyle: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        marginTop: 10
      }
    }
  }
);
