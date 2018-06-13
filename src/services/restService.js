// @flow

import { set, isEmpty} from 'lodash';
import { apiEndpoint } from './constants';

export async function KycService({ api, third_party, method, params }) {
  const headers = {};

  let path = `${apiEndpoint}${api}`;

  if (third_party) {
    path = api;
  }

  set(headers, 'Accept', 'application/json');
  set(headers, 'Content-Type', 'application/json');
  //set(headers, 'Access-Control-Expose-Headers', 'authorization');
  
  const reqBody = {
    method,
    headers,
  };

  if (!isEmpty(params)) {
    reqBody.body = JSON.stringify(params);
  }

  return fetch(path, reqBody)
    .then(response => {
      
      return response.json();
    })
    .then((data) => {
      // console.log('response json data = ', data);
      if (third_party) {
        return {
          result: 'ok',
          data
        };
      }
      return data;
    })
    .catch((error) => {
      // console.log('request error = ', error);
      return {
        result: 'error',
        message: 'Please check your internet connection!'
      };
    });
}
