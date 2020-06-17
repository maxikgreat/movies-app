import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchListAction} from '../store/movies/actions';

export const useMovies = () => {
  const movies = useSelector(state => state);
  const dispatch = useDispatch();

  const [filters, setFilters] = useState({
    input: '',
  });

  const filtersChangedHandler = (text) => {
    fetchList(filters.input);
  };

  const fetchList = (query) => {
    dispatch(fetchListAction(query));
  };

  return {
    movies,
    filters,
    setFilters,
    filtersChangedHandler,
  };
};
