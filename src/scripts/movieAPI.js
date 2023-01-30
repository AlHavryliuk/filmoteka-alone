import axios from 'axios';

export class theMovieAPI {
  static BASE_URL = `https://api.themoviedb.org/3/`;
  static API_KEY = `cae69de8a9226671dcc6f789bf47c829`;

  constructor() {
    this.page = 1;
    this.query = null;
  }

  async fetchTrendingMovie() {
    const response = await axios.get(
      `${theMovieAPI.BASE_URL}trending/movie/day`,
      {
        params: {
          api_key: theMovieAPI.API_KEY,
          page: 1,
        },
      }
    );

    return response.data;
  }

  async fetchGenresList() {
    try {
      const response = await axios.get(
        `${theMovieAPI.BASE_URL}genre/movie/list`,
        {
          params: {
            api_key: theMovieAPI.API_KEY,
            language: 'en-US',
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async fetchTreiler(id) {
    const response = await axios.get(
      `${theMovieAPI.BASE_URL}movie/${id}/videos`,
      {
        params: {
          api_key: theMovieAPI.API_KEY,
          page: 1,
        },
      }
    );
    return response.data;
  }

  async fetchMovieById(filmId) {
    const response = await axios.get(`${theMovieAPI.BASE_URL}movie/${filmId}`, {
      params: {
        api_key: theMovieAPI.API_KEY,
        // query: query,
        // year: year,
      },
    });

    return response.data;
  }

  async fetchMovieByMovie(query) {
    const response = await axios.get(`${theMovieAPI.BASE_URL}search/movie`, {
      params: {
        api_key: theMovieAPI.API_KEY,
        query,
      },
    });

    return response.data;
  }
}
