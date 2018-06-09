// @flow

import { fork, all } from 'redux-saga/effects';
import {
  authSaga,
  validationSaga
} from '../modules';

export default function* rootSaga() {
  yield all([
    fork(authSaga),
    fork(validationSaga)
  ]);
}
