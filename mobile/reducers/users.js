import { SET_USER, GET_USER_STATUS_SUCCESS, POST_USER_ANSWERS_SUCCESS } from '../actions/users';

export default function users(state = {}, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_USER:
      return {
        ...state,
        user: payload.user,
      };

    case GET_USER_STATUS_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          status: payload.userStatus,
        },
      };

    case POST_USER_ANSWERS_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          status: payload.userStatus,
        },
      };

    default:
      return state;
  }
}
