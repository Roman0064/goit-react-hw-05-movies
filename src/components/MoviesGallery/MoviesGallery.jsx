import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loader from 'components/Loader/Loader';
import css from './MoviesGallery.module.css'

function MoviesGallery({ movies = [], isFetching = false, error = '' }) {
  const showLoader = isFetching;
  const showMovies = movies?.length > 0;
  const showError = !!error;
  console.log(movies)
  return (
    <div className={css.wrapper}>
      <ul className={css.list}>
        {showMovies &&
          movies.map(movie => {
            return <MovieItem key={movie.title} {...movie} />;
          })}
      </ul>
      {showError && <p>{error.message}</p>}
      {showLoader && <Loader />}
    </div>
  );
}
function MovieItem({ name, id, title }) {
  const location = useLocation();

  return (
    <li className={css.list_item}>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        {name}{title}
      </Link>
    </li>
  );
}

MovieItem.propTypes = {
  original_title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

MoviesGallery.propTypes = {
  error: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      original_title: PropTypes.string,
      overview: PropTypes.string,
      vote_average: PropTypes.number,
      poster_path: PropTypes.string,
    })
  ).isRequired,
};

export default MoviesGallery;
