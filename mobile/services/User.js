import { Api } from './Instances';

export default class User {
  static get(id) {
    const request = {
      method: 'POST',
      url: '/user',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        userId: id
      }
    };
    return Api(request);
  }

  static login({ username, password }) {
    const request = {
      method: 'POST',
      url: '/login',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        username,
        password,
      }
    }
    return Api(request);
  }

  static create({ username, password }) {
    const request = {
      method: 'POST',
      url: '/users',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        username,
        password,
      }
    }
    return Api(request);
  }

  static weekResult({userId, amount}) {
    const request = {
      method: 'POST',
      url: '/results',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        userId,
        amount,
      }
    };
    return Api(request);
  }
}
