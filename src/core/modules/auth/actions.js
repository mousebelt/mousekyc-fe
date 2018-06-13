import { createAction } from 'redux-actions';
import { createPromiseAction } from '../utils';

/**
 * Action Types
 */

export const LOGIN_REQUEST = 'login/LOGIN_REQUEST';
export const LOGIN_REQUEST_SUCCESS = 'login/LOGIN_REQUEST_SUCCESS';
export const USER_UPDATE_REQUEST = 'user/UPDATE_REQUEST';
export const USER_UPDATE_REQUEST_SUCCESS = 'user/UPDATE_REQUEST_SUCCESS';
export const IDENTITY_UPDATE_REQUEST = 'identity/UPDATE_REQUEST';
export const IDENTITY_UPDATE_REQUEST_SUCCESS = 'identity/UPDATE_REQUEST_SUCCESS';
export const SELFIE_UPDATE_REQUEST = 'selfie/UPDATE_REQUEST';
export const SELFIE_UPDATE_REQUEST_SUCCESS = 'selfie/UPDATE_REQUEST_SUCCESS';
export const GEN_TOKEN_REQUEST = 'genToken/gen_token_REQUEST';
export const GEN_TOKEN_REQUEST_SUCCESS = 'genToken/gen_token_REQUEST_SUCCESS';
/**
 * Action Creators
 */
export const authActionCreators = {
  login: createPromiseAction(LOGIN_REQUEST),
  loginSuccess: createAction(LOGIN_REQUEST_SUCCESS),
  updateUser: createPromiseAction(USER_UPDATE_REQUEST),
  updateUserSuccess: createPromiseAction(USER_UPDATE_REQUEST_SUCCESS),
  updateIdentity: createPromiseAction(IDENTITY_UPDATE_REQUEST),
  updateIdentitySuccess: createPromiseAction(IDENTITY_UPDATE_REQUEST_SUCCESS),
  updateSelfie: createPromiseAction(SELFIE_UPDATE_REQUEST),
  updateSelfieSuccess: createPromiseAction(SELFIE_UPDATE_REQUEST_SUCCESS),
  genToken: createPromiseAction(GEN_TOKEN_REQUEST),
  getTokenSuccess: createAction(GEN_TOKEN_REQUEST_SUCCESS),
};
