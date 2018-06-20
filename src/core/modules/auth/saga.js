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
  GEN_TOKEN_REQUEST,
  USER_UPDATE_REQUEST,
  IDENTITY_UPDATE_REQUEST,
  SELFIE_UPDATE_REQUEST
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
      
    if (response.status === 200) {
      yield put(authActionCreators.loginSuccess({ user: response.data }));
      resolve(response.data);
    } else {
      reject(response.message);
    }
  } catch (e) {
    reject(e);
  }
}

export function* asyncGenTokenRequest({ payload, resolve, reject }) {
  const { email } = payload;
  try {IDENTITY_UPDATE_REQUEST
    const response = yield call(KycService,
      {
        api: `/user/gentoken`,
        method: 'POST',
        params: {email: email}
      });
    if (response.status === 200) {
      yield put(authActionCreators.getTokenSuccess({ user: response.data }));
      resolve(response.data);
    } else {
      reject(response.message);
    }
  } catch (e) {
    reject(e);
  }
}

export function* asyncUserUpdateRequest({ payload, resolve, reject }) {
  const { token, residenceCountry, docType, firstname, lastname,dob,documentExpireDate,nationalityCountry,documentId } = payload;
  console.log(payload);
  try {
    const response = yield call(KycService,
      {
        api: `/user/update`,
        method: 'POST',
        params: {
          token: token,
          residenceCountry: residenceCountry,
          firstname: firstname,
          lastname: lastname,
          dob: dob,
          documentExpireDate: documentExpireDate,
          nationalityCountry: nationalityCountry,
          documentId: documentId
        }
      });
      console.log(response)
    if (response.status === 200) {
      yield put(authActionCreators.updateUserSuccess({ profile: response.data, docType: docType}));
      resolve(response.data);
    } else {
      reject(response.message);
    }
  } catch (e) {
    reject(e);
  }
}

export function* asyncIdentityUpdateRequest({ payload, resolve, reject }) {
  const { token, documentType, identityDocument } = payload;
  try {
    const response = yield call(KycService,
      {
        api: `/user/update/identity`,
        method: 'POST',
        params: {
          token: token,
          documentType: documentType,
          identityDocument: identityDocument
        }
      });
    if (response.status === 200) {
      yield put(authActionCreators.updateIdentitySuccess({ profile: response.data}));
      resolve(response.data);
    } else {
      reject(response.message);
    }
  } catch (e) {
    reject(e);
  }
}

export function* asyncSelfieUpdateRequest({ payload, resolve, reject }) {
  const { token, selfie } = payload;
  try {
    const response = yield call(KycService,
      {
        api: `/user/update/selfie`,
        method: 'POST',
        params: {
          token: token,
          selfie: selfie
        }
      });
    if (response.status === 200) {
      yield put(authActionCreators.updateSelfieSuccess({ profile: response.data}));
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

export function* watchGenTokenRequest() {
  while (true) {
    const action = yield take(GEN_TOKEN_REQUEST);
    yield* asyncGenTokenRequest(action);
  }
}

export function* watchUserUpdateRequest() {
  while (true) {
    const action = yield take(USER_UPDATE_REQUEST);
    yield* asyncUserUpdateRequest(action);
  }
}

export function* watchIdentityUpdateRequest() {
  while (true) {
    const action = yield take(IDENTITY_UPDATE_REQUEST);
    yield* asyncIdentityUpdateRequest(action);
  }
}

export function* watchSelfieUpdateRequest() {
  while (true) {
    const action = yield take(SELFIE_UPDATE_REQUEST);
    yield* asyncSelfieUpdateRequest(action);
  }
}

export default function* () {
  yield all([
    fork(watchLoginRequest),
    fork(watchGenTokenRequest),
    fork(watchUserUpdateRequest),
    fork(watchIdentityUpdateRequest),
    fork(watchSelfieUpdateRequest),
  ]);
}
