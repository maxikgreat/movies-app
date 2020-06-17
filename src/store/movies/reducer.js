import {
  FETCH_MOVIE_BY_ID, FETCH_LIST,
  LOADER_SHOW, LOADER_HIDE,
  NEXT_PAGE,
  LOADER_LISTING_SHOW,
  LOADER_LISTING_HIDE,
} from '../types';

const initialState = {
  loading: true,
  loadingListing: false,
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
    case NEXT_PAGE:
      return {
        ...state,
        listing: {
          ...payload,
          results: [...state.listing.results, ...payload.results],
        },
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
      case LOADER_LISTING_SHOW:
      return {
        ...state,
        loadingListing: true,
      };
    case LOADER_LISTING_HIDE:
      return {
        ...state,
        loadingListing: false,
      };
    default: return state;
  }
};
