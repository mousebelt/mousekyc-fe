import { createAction } from 'redux-actions';
import { createPromiseAction } from '../utils';

/**
 * Action Types
 */

export const COUNTRY_REQUEST = 'validation/COUNTRY_REQUEST';
export const COUNTRY_REQUEST_SUCCESS = 'validation/COUNTRY_REQUEST_SUCCESS';
/**
 * Action Creators
 */
export const validationActionCreators = {
  getCountries: createPromiseAction(COUNTRY_REQUEST),
  getCountriesSuccess: createAction(COUNTRY_REQUEST_SUCCESS),
};
