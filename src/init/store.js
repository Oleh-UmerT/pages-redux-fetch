import { createStore, applyMiddleware } from 'redux';

import { rootReducer } from './rootReducer';
import { middleware } from './middleware';

export const store = createStore(rootReducer, applyMiddleware(...middleware));
