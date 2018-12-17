import * as UserService from '../services/User';
import { startLoading, stopLoading } from './loading';

export const SET_USER = 'SET_USER';
export const setUser = user => ({
  type: SET_USER,
  payload: { user },
});

export const GET_USER_STATUS_SUCCESS = 'GET_USER_STATUS_SUCCESS';
const getUserStatusSuccess = payload => ({
  type: GET_USER_STATUS_SUCCESS,
  payload,
});

export const getUserStatus = userId => (dispatch) => {
  dispatch(startLoading());

  UserService.getUserStatus(userId)
    .then((res) => {
      dispatch(stopLoading());
      dispatch(getUserStatusSuccess(res));
    })
    .catch((err) => {
      console.log(err);
      stopLoading();
    });
};

export const POST_USER_ANSWERS_SUCCESS = 'POST_USER_ANSWERS_SUCCESS';
const postUserAnswersSuccess = payload => ({
  type: POST_USER_ANSWERS_SUCCESS,
  payload,
});

export const postUserAnswers = userId => (dispatch) => {
  dispatch(startLoading());

  UserService.postUserAnswers(userId)
    .then((res) => {
      dispatch(stopLoading());
      dispatch(postUserAnswersSuccess(res));
    })
    .catch((err) => {
      console.log(err);
      stopLoading();
    });
};
