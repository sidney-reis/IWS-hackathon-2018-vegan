import { Container } from 'unstated';

export default class UserContainer extends Container {
  state = {
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
    completedChallenges: []
  };

  // TODO: implement fetch
  fetchUser() {}
}
