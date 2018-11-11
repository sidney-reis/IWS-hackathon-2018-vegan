import { SET_USER } from '../actions/';

const defaultState = {
  user: {}
};

export default function users(state = defaultState, action) {
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
