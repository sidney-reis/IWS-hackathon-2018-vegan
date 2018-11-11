import { Api } from './Instances';

export default class User {
  static getInitialChallenges() {
    const request = {
      method: 'GET',
      url: '/initialChallenges',
      headers: {
        'Content-Type': 'application/json',
      }
    };
    return Api(request);
  }

  static pickChallenge({ userId, challengeId }) {
    const request = {
      method: 'POST',
      url: '/login',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        userId,
        challengeId,
      }
    }
    return Api(request);
  }
}
