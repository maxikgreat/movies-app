import {useSelector, useDispatch} from 'react-redux';
import {fetchListAction} from '../store/movies/actions';

export const useMovies = () => {
  const movies = useSelector(state => state);
  const dispatch = useDispatch();

  const fetchList = () => {
    dispatch(fetchListAction());
  };

  return {
    movies,
    fetchList,
  };
};
