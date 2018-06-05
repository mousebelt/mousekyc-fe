import {
  LOGIN_REQUEST_SUCCESS,
} from './actions';
import { initialState } from '../initialState';

export default function auth(state = initialState.user, action = {}) {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_REQUEST_SUCCESS: {
      break;
    }
    default: {
      return state;
    }
  }
}
