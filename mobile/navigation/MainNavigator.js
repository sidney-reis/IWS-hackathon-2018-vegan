import React from 'react';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import ChallengeTips from '../screens/ChallengeTipsScreen';
import ProfileScreen from '../screens/ProfileScreen';

import Icon from '../components/Icon';
import Logo from '../components/Logo';

export default createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => ({
        headerLeft: (
          <Icon
            name="menu"
            size={22}
            onPress={() => navigation.navigate('Login')}
          />
        ),
        headerTitle: <Logo size="small" />,
        headerRight: (
          <Icon
            name="profile"
            size={32}
            onPress={() => navigation.navigate('Profile')}
          />
        )
      })
    },
    ChallengeTips: {
      screen: ChallengeTips,
      navigationOptions: ({ navigation }) => ({
        headerLeft: (
          <Icon
            name="leftArrow"
            size={22}
            onPress={() => navigation.pop()}
            label="Back"
          />
        )
      })
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: ({ navigation }) => ({
        headerLeft: (
          <Icon
            name="leftArrow"
            size={22}
            onPress={() => navigation.pop()}
            label="Back"
          />
        )
      })
    }
  },
  {
    initialRouteName: 'Profile',
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
