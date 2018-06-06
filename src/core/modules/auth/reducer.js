import {
  LOGIN_REQUEST_SUCCESS,
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
    default: {
      return state;
    }
  }
}
