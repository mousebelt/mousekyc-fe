import {
  put,
  call,
  fork,
  all,
  take,
} from 'redux-saga/effects';

import {
  authActionCreators,
  LOGIN_REQUEST,
} from './actions';


export function* asyncLoginRequest({ payload, resolve, reject }) {
  
}

export function* watchLoginRequest() {
  while (true) {
    const action = yield take(LOGIN_REQUEST);
    yield* asyncLoginRequest(action);
  }
}



export default function* () {
  yield all([
    fork(watchLoginRequest),
  ]);
}
