import { types } from './types';

const initialState = {
  data: [],
  isFetching: false,
  error: false
};

export const servicesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SERVICES_START_FETCHING:
      return {
        ...state,
        isFetching: true
      };
    case types.SERVICES_STOP_FETCHING:
      return {
        ...state,
        isFetching: false
      };
    case types.SERVICES_SET_FETCHING_ERROR:
      return {
        ...state,
        error: payload,
        data: null
      };
    case types.SERVICES_FILL:
      return {
        ...state,
        data: payload,
        error: null
      };
    default:
      return state;
  }
};
