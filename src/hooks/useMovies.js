import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchListAction, fetchNextPageAction, fetchMovieByIdAction} from '../store/movies/actions';

export const useMovies = () => {
  const movies = useSelector(state => state);
  const dispatch = useDispatch();

  const [filters, setFilters] = useState({
    page: 1,
    query: '',
    include_adult: false,
    region: '',
    year: '',
  });

  const filtersChangedHandler = () => {
    dispatch(fetchListAction(filters));
  };

  const pageChangedHandler = () => {
    dispatch(fetchNextPageAction(filters));
  };

  const fetchMovieById = (id) => {
    dispatch(fetchMovieByIdAction(id));
  };

  return {
    movies,
    filters,
    setFilters,
    filtersChangedHandler,
    pageChangedHandler,
    fetchMovieById,
  };
};
