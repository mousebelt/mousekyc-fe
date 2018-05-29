import {
  SET_SETTINGS,
  SET_CURRENCY,
  SET_NET_TYPE,
  SET_TICKER
} from './actions';

import { initialState } from '../initialState';

export default function auth(state = initialState.settings, action = {}) {
  const { type, payload } = action;

  switch (type) {
    case SET_SETTINGS: 
      return {
        ...state,
        ...payload
      };
    case SET_CURRENCY:
      if (state.currency !== payload)
        return {
          ...state,
          currency: payload,
          ticker: undefined
        };
      else
        return state;
    case SET_NET_TYPE:
      if (state.netType !== payload)
        return {
          ...state,
          netType: payload
        };
      else
        return state;
    case SET_TICKER:
      if (state.ticker !== payload)
        return {
          ...state,
          ticker: payload
        };
      else
        return state;
    default: 
      return state;
  }
}
