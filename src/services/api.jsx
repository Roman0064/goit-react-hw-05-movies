const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '95b1302bfbaa67a4b0727b46a7f8151e';

export const MoviesAPI = {
    async fetchMovies ()  {
      const response = await fetch(
        `${BASE_URL}/trending/all/day?api_key=${API_KEY}`
      );
      return await response.json();
    }
};