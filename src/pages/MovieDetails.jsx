import { Suspense, lazy, useEffect } from 'react';
import { useParams,useLocation,useNavigate,Link,Routes,Route } from 'react-router-dom';
import { MoviesAPI } from 'services/api';
import { useFetch } from 'hooks/useFetch';
import { Loader } from 'components';
import css from './MovieDetails.module.css'


const LazyCast = lazy(() => import('./Cast'));
const LazyReviews = lazy(() => import('./Reviews'));

const MovieDetails = () => {
  const { isFetching, data, error, fetchData } = useFetch();
  const movieDetails = data;

  const location = useLocation();
  console.log('location From MovieDetal: ', location);

  const navigate = useNavigate();
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    fetchData(MoviesAPI.fetchMovieById(movieId));
  }, [fetchData, movieId]);

  const handleMoveBack = () => {
    if (location.state) {
      navigate(location.state.from);
      return;
    }

    navigate('/');
  };

  return (
    <div className={css.wrapper}>
      <button onClick={() => handleMoveBack()} className={css.button}> Go back </button>
      {error && <p>{error.message}</p>}
      {isFetching && (
        <div>
          <Loader />
        </div>
      )}
      {!!movieDetails && (
        <div className={css.page}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
            alt={movieDetails.original_title}
            className={css.img}
          />
          <div className={css.movie_info}>
            <h1>{movieDetails.original_title}</h1>
            <p>Vote Average: {movieDetails.vote_average}</p>
            <h2>Overview</h2>
            <p> {movieDetails.overview}</p>
            <h3>Genres</h3>
            {movieDetails?.genres?.length > 0
              ? movieDetails.genres.map(({ id, name }) => {
                  return (
                    <span className={css.genre} key={id}>
                      {name}
                    </span>
                  );
                })
              : 'There are no genres available'}
          </div>
        </div>
      )}
      <div>
        <div className={css.additional_handlers}>
          <Link
            className={css.link}
            to="cast"
            state={{ from: location.state?.from }}
          >
            Cast
          </Link>
          <Link
            className={css.link}
            to="reviews"
            state={{ from: location.state?.from }}
          >
            Reviews
          </Link>
        </div>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="cast" element={<LazyCast />} />
            <Route path="reviews" element={<LazyReviews />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

export default MovieDetails;
