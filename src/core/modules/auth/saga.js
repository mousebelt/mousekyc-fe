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

import { KycService } from '../../../services';

export function* asyncLoginRequest({ payload, resolve, reject }) {
  const { token } = payload;
  try {
    const response = yield call(KycService,
      {
        api: `/user/info/${token}`,
        method: 'GET',
        params: {}
      });
    // @TODO: Open next lines after login api is completed
    if (response.status === 200) {
      // console.log('login response:', response);
      yield put(authActionCreators.loginSuccess({ user: response.data }));
      resolve(response.data);
    } else {
      reject(response.message);
    }
  } catch (e) {
    reject(e);
  }
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
