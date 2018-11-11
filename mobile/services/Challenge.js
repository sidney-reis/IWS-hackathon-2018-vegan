import { Api } from './Instances';

export default class Challenge {
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
      url: '/pickChallenge',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        userId,
        challengeId,
      }
    }
    return Api(request);
  }

  static nextChallenges({ userId }) {
    const request = {
      method: 'POST',
      url: '/nextChallenges',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        userId,
      }
    }
    return Api(request);
  }
}
