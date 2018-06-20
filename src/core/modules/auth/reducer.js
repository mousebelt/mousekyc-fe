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
      if (payload.user.approvalStatus === 'NO_SUBMISSION_YET' || payload.user.approvalStatus === 'ACTION_REQUESTED') {
        return {
          ...state,
          user: payload.user
        }
      } else {
        return {
          ...state,
          user: {},
          profile: {},
          docType: ''
        }
      }
      break;
    }
    case GEN_TOKEN_REQUEST_SUCCESS: {
      if (payload.user.approvalStatus === 'NO_SUBMISSION_YET' || payload.user.approvalStatus === 'ACTION_REQUESTED') {
        return {
          ...state,
          user: payload.user
        }
      } else {
        return {
          ...state,
          user: {},
          profile: {},
          docType: ''
        }
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
