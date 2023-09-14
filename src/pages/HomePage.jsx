import React, { useEffect } from 'react';
import { useFetch } from 'hooks/useFetch';
import { MoviesAPI } from 'services/api';
import { MoviesGallery } from 'components';
import css from "./HomePage.module.css"

function HomePage() {
  const { isFetching, data, error, fetchData } = useFetch();
  
  useEffect(() => {
    fetchData(MoviesAPI.fetchMovies());
  }, [fetchData]);

  const movies = data?.results;

  return (
    <div className={css.wrapper}>
      <h1>Trending today</h1>
      <MoviesGallery error={error} isFetching={isFetching} movies={movies} className={css.gallery}/>
    </div>
  );
}

export default HomePage;
