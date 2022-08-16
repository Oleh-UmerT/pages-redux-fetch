import { combineReducers } from 'redux';

import { servicesReducer as services } from '../services/reducer';

export const rootReducer = combineReducers({
  services
});
