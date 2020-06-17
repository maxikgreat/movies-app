import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {moviesReducer} from './movies/reducer';

export const store = createStore(
  moviesReducer,
  applyMiddleware(thunk, logger)
);
