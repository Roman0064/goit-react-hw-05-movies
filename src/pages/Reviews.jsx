import { Loader } from 'components';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from 'hooks/useFetch';
import { MoviesAPI } from 'services/api';
import css from './Reviews.module.css';

function Reviews() {
  const { isFetching, data, error, fetchData } = useFetch();
  const reviews = data?.results;
  let { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    fetchData(MoviesAPI.fetchMovieReviews(movieId));
  }, [fetchData, movieId]);

  return (
    <div>
      {error && <p>{error.message}</p>}
      {isFetching && (
        <div>
          <Loader />
        </div>
      )}
      {!!reviews && !isFetching && (
        <ul className={css.wrapper}>
          {reviews.length > 0 &&
            reviews.map(review => (
              <li key={review.id} className={css.li_item}>
                <p className={css.p_item}><span className={css.span_item}>Author:</span> {review.author}</p>
                <p className={css.p_item}><span className={css.span_item}>Character:</span> {review.content}</p>
              </li>
            ))}
          {reviews.length === 0 && !isFetching && (
            <li>There are no reviews yet!</li>
          )}
        </ul>
      )}
    </div>
  );
}

export default Reviews;
