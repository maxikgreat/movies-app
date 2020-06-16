import {FETCH_MOVIE_BY_ID, FETCH_LIST, LOADER_SHOW, LOADER_HIDE} from '../types';
import axios from 'axios';
import config from '../../../config';

const {BASE_URL, API_KEY} = config;

export const fetchListAction = (query = 'Avengers') => {
  return async dispatch => {
    dispatch({
      type: LOADER_SHOW,
    });
    const request = `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}`;
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
