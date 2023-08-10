import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useFetch } from 'hooks/useFetch';
import { MoviesAPI } from 'services/api';

import { MoviesGallery, Searchbar } from 'components';

function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { isFetching, data, error, fetchData } = useFetch();
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;

    fetchData(MoviesAPI.fetchMovieBySearch(query));
  }, [query, fetchData]);

  const handleSubmitSearchTerm = query => {
    setSearchParams({ query: query });
  };

  const movies = data?.results;
  return (
    <div>
      <Searchbar onSubmit={handleSubmitSearchTerm} />
      <MoviesGallery error={error} isFetching={isFetching} movies={movies} />
    </div>
  );
}

export default Movies;
