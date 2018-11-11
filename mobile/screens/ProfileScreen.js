import React, { Component } from 'react';

import ScreenContainer from '../components/ScreenContainer';
import ProfileHeader from './ProfileScreen/ProfileHeader';
import ProfileHistory from './ProfileScreen/ProfileHistory';

const user = {
  username: 'jorge_antonio',
  currentLevel: 0,
  completedLevelChallenges: 2,
  currentChallenge: {
    title: 'Cows are friends',
    description: 'Do not eat red meat for at least 3 days this week.',
    impact:
      'You eat 30% less animal base products, this corresponds to 150 liters of water saved',
    amount: 3,
    theme: 'meat'
  },
  currentChallengeProgress: 2,
  completedChallenges: [
    {
      title: 'Growing seeds',
      description:
        'Eat 3 portions of seeds over the week: flax seeds, chia seeds, sunflower seeds, pumpkin seeds',
      impact:
        'You ate 70% less animal-based products, this corresponds to 150 liters of water saved',
      amount: 3,
      theme: 'meat'
    },
    {
      title: 'Balance',
      description: 'Eat 3 portions of fruit per day.',
      impact: 'Eating different kinds of fruits is key to a healthier life.',
      amount: 3,
      theme: 'meat'
    }
  ]
};

export default class ProfileScreen extends Component {
  render() {
    return (
      <ScreenContainer>
        <ProfileHeader user={user} />
        <ProfileHistory user={user} />
      </ScreenContainer>
    );
  }
}
