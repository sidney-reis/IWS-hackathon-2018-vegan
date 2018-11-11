import { SET_USER } from '../actions/users';

export default function users(state = {}, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_USER:
      return {
        ...state,
        user: payload.user,
      };

    default:
      return state;
  }
}
