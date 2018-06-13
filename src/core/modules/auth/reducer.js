import {
  LOGIN_REQUEST_SUCCESS,
  GEN_TOKEN_REQUEST_SUCCESS,
  USER_UPDATE_REQUEST_SUCCESS,
  IDENTITY_UPDATE_REQUEST_SUCCESS,
  SELFIE_UPDATE_REQUEST_SUCCESS,
} from './actions';
import { initialState } from '../initialState';

export default function auth(state = initialState.auth, action = {}) {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_REQUEST_SUCCESS: {
      return {
        ...state,
        user: payload.user
      }
      break;
    }
    case GEN_TOKEN_REQUEST_SUCCESS: {
      return {
        ...state,
        user: payload.user
      }
      break;
    }
    case USER_UPDATE_REQUEST_SUCCESS: {
      return {
        ...state,
        profile: payload.profile,
        docType: payload.docType
      }
      break;
    }
    case IDENTITY_UPDATE_REQUEST_SUCCESS: {
      return {
        ...state,
        profile: payload.profile
      }
      break;
    }
    case SELFIE_UPDATE_REQUEST_SUCCESS: {
      return {
        ...state,
        profile: payload.profile
      }
      break;
    }
    default: {
      return state;
    }
  }
}
