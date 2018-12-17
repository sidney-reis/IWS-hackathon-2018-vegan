import { Api } from './Instances';

export default class User {
  static get(id) {
    const request = {
      method: 'POST',
      url: '/user',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        userId: id,
      },
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
      data: {
        username,
        password,
      },
    };
    return Api(request);
  }

  static create({ username, password }) {
    const request = {
      method: 'POST',
      url: '/users',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        username,
        password,
      },
    };
    return Api(request);
  }

  static getUserStatus({ userId }) {
    const request = {
      method: 'GET',
      url: '/userStatus',
      headers: {
        'Content-Type': 'application/json',
        userId,
      },
    };
    return Api(request);
  }

  static postUserAnswers({ userId, answers }) {
    const request = {
      method: 'POST',
      url: '/userAnswers',
      headers: {
        'Content-Type': 'application/json',
        userId,
      },
      data: {
        answers,
      },
    };
    return Api(request);
  }
}
