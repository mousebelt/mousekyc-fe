import {
  LOGIN_REQUEST_SUCCESS,
} from './actions';
import { defaultReducers } from '../defaultReducers';

const DEFAULT = defaultReducers.auth;

export default function auth(state = DEFAULT, action = {}) {
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
