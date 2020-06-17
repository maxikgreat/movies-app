import {
  NEXT_PAGE,
  FETCH_LIST,
  LOADER_SHOW,
  LOADER_HIDE,
  LOADER_LISTING_HIDE,
  LOADER_LISTING_SHOW,
} from '../types';
import axios from 'axios';
import config from '../../../config';

const {BASE_URL, API_KEY} = config;

const createRequest = (filters) => {
  const params = Object.entries(filters).map(filter => {
    return filter.join('=');
  }).join('&');
  return `${BASE_URL}search/movie?api_key=${API_KEY}&${params}`;
};

export const fetchListAction = (filters) => {
  return async dispatch => {
    dispatch({
      type: LOADER_SHOW,
    });
    if (!filters.query) {
      return;
    }
    const request = createRequest(filters);
    try {
      const response = await axios.get(request);
      dispatch({
        type: FETCH_LIST,
        payload: response.data,
      });
    } catch (e) {
      console.log(e);
    }
    dispatch({
      type: LOADER_HIDE,
    });
  };
};

export const fetchNextPageAction = (filters) => {
  return async dispatch => {
    dispatch({
      type: LOADER_LISTING_SHOW,
    });
    const request = createRequest(filters);
    try {
      const response = await axios.get(request);
      dispatch({
        type: NEXT_PAGE,
        payload: response.data,
      });
    } catch (e) {
      console.log(e);
    }
    dispatch({
      type: LOADER_LISTING_HIDE,
    });
  };
};
