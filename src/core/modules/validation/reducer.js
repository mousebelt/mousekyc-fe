import {
  COUNTRY_REQUEST_SUCCESS,
} from './actions';
import { initialState } from '../initialState';

export default function validation(state = initialState.validation, action = {}) {
  const { type, payload } = action;

  switch (type) {
    case COUNTRY_REQUEST_SUCCESS: {
      return {
        ...state,
        countries: payload.countries
      }
      break;
    }
    default: {
      return state;
    }
  }
}
