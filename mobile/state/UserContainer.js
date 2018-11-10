import { Container } from 'unstated';

export default class UserContainer extends Container {
  state = {
    email: null,
    password: null,
    name: 'Jorge Antônio',
    completedChallenges: 0
  };
}
