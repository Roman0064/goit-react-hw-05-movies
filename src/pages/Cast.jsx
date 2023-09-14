import { Loader } from 'components';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from 'hooks/useFetch';
import { MoviesAPI } from 'services/api';
import css from './Cast.module.css'


function Cast() {
  const { isFetching, data, error, fetchData } = useFetch();
  const castData = data?.cast;
  let { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    fetchData(MoviesAPI.fetchMovieCast(movieId));
  }, [fetchData, movieId]);

  return (
    <div>
      {error && <p>{error.message}</p>}
      {isFetching && (
        <div>
          <Loader />
        </div>
      )}
      {!!castData && !isFetching && (
        <ul className={css.list_cast}>
          {castData.length > 0 &&
            castData.map(cast => (
              <li className={css.cast_item} key={cast.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                  alt={cast.name}
                  className={css.img}
                />
                <p className={css.name_item}>{cast.name}</p>
                <p className={css.character_item}>Character '{cast.character}'</p>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}

export default Cast;
