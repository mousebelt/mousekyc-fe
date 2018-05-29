// @flow

import { fork, all } from 'redux-saga/effects';
import {
  settingsSaga,
} from '../modules';

export default function* rootSaga() {
  yield all([
    fork(settingsSaga),
  ]);
}
