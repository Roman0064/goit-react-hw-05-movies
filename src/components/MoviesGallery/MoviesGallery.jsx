import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loader from 'components/Loader/Loader';

function MoviesGallery({ movies = [], isFetching = false, error = '' }) {
  const showLoader = isFetching;
  const showMovies = movies?.length > 0;
  const showError = !!error;
  return (
    <>
      <ul>
        {showMovies &&
          movies.map(movie => {
            return <li><Link><MovieItem key={movie.id} {...movie} /> </Link> </li>;
          })}
      </ul>
      {showError && <p>{error.message}</p>}
      {showLoader && <Loader />}
    </>
  );
}
function MovieItem({ original_title, id }) {
  const location = useLocation();

  return (
    <p to={`/movies/${id}`} state={{ from: location }}>
      {original_title}
    </p>
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
