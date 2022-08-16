import { types } from './types';
import { api } from '../api';

export const servicesActions = Object.freeze({
  startFetching: () => {
    return {
      type: types.SERVICES_START_FETCHING
    };
  },
  stopFetching: () => {
    return {
      type: types.SERVICES_STOP_FETCHING
    };
  },
  fill: (payload) => {
    return {
      type: types.SERVICES_FILL,
      payload
    };
  },
  setFetchingError: (error) => {
    return {
      type: types.SERVICES_SET_FETCHING_ERROR,
      error: true,
      payload: error
    };
  },
  fetchAsync: (id) => async (dispatch) => {
    dispatch(servicesActions.startFetching());

    let response;
    if (id) {
      response = await api.services.fetchById(id);
    } else {
      response = await api.services.fetch();
    }
    if (response.status === 200) {
      dispatch(servicesActions.fill(response.data));
    } else {
      const error = {
        status: response.status
      };
      dispatch(servicesActions.setFetchingError(error));
    }
    dispatch(servicesActions.stopFetching());
  }
});
