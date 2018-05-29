import { createAction } from 'redux-actions';
import { createPromiseAction } from '../utils';

/**
 * Action Types
 */

export const LOGIN_REQUEST = 'login/LOGIN_REQUEST';
export const LOGIN_REQUEST_SUCCESS = 'login/LOGIN_REQUEST_SUCCESS';
/**
 * Action Creators
 */
export const authActionCreators = {
  login: createPromiseAction(LOGIN_REQUEST),
  loginSuccess: createAction(LOGIN_REQUEST_SUCCESS),
};
