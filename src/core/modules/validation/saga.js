import {
  put,
  call,
  fork,
  all,
  take,
} from 'redux-saga/effects';

import {
  validationActionCreators,
  COUNTRY_REQUEST,
} from './actions';

import { KycService } from '../../../services';

export function* asyncCountryRequest({ payload, resolve, reject }) {
  try {
    const response = yield call(KycService,
      {
        api: `/global/countries`,
        method: 'GET',
        params: {}
      });
    if (response.status === 200) {
      yield put(validationActionCreators.getCountriesSuccess({ countries: response.data }));
      resolve(response.data);
    } else {
      reject(response.message);
    }
  } catch (e) {
    reject(e);
  }
}

export function* watchCountryRequest() {
  while (true) {
    const action = yield take(COUNTRY_REQUEST);
    yield* asyncCountryRequest(action);
  }
}

export default function* () {
  yield all([
    fork(watchCountryRequest),
  ]);
}
