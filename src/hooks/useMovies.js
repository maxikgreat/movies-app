import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchListAction, fetchNextPageAction} from '../store/movies/actions';

export const useMovies = () => {
  const movies = useSelector(state => state);
  const dispatch = useDispatch();

  const [filters, setFilters] = useState({
    page: 1,
    query: '',
  });

  const filtersChangedHandler = () => {
    dispatch(fetchListAction(filters));
  };

  const pageChangedHandler = () => {
    dispatch(fetchNextPageAction(filters));
  };

  return {
    movies,
    filters,
    setFilters,
    filtersChangedHandler,
    pageChangedHandler,
  };
};
