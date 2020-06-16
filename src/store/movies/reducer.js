import {FETCH_MOVIE_BY_ID, FETCH_LIST, LOADER_SHOW, LOADER_HIDE} from '../types';

const initialState = {
  loading: false,
  error: '',
  listing: {},
};

export const moviesReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_LIST:
      return {
        ...state,
        listing: payload,
      };
    case FETCH_MOVIE_BY_ID:
      return {
        ...state,
      };
    case LOADER_SHOW:
      return {
        ...state,
        loading: true,
      };
    case LOADER_HIDE:
      return {
        ...state,
        loading: false,
      };
    default: return state;
  }
};
