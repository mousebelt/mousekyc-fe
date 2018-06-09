import { combineReducers } from 'redux';

import {
  auth,
  validation
} from '../modules';

const rootReducer = combineReducers({
  auth,
  validation
});

export default rootReducer;
