import { theMovieAPI } from './movieAPI';
import { modalPopup } from './modalPopup';
import { render } from './renderMarkup';
import Notiflix from 'notiflix';
import { refs } from './refs';
import { savedFilms } from './serialize';

const movieAPI = new theMovieAPI();

export const loadData = {
  genreList: [],

  async trends() {
    try {
      const { results } = await movieAPI.fetchTrendingMovie();
      render.galleryMarkup(results, true);
    } catch (err) {
      console.log(err);
    }
  },

  async moreInfo(movieId) {
    const results = await movieAPI.fetchMovieById(movieId);
    render.popupMarkup(results);
    modalPopup.addAnimattion();
  },

  async moreInfoLib(movieId) {
    const results = await movieAPI.fetchMovieById(movieId);
    render.popupMarkupLib(results);
    modalPopup.addAnimattion();
  },

  async trailer(id) {
    const { results } = await movieAPI.fetchTreiler(id);
    const popupEl = document.querySelector(`.popup__trailer`);
    let trailerKey = null;
    console.log(results);
    results.map(element => {
      if (element.name.toLowerCase().includes(`official trailer`)) {
        trailerKey = element.key;
      }
    });
    if (trailerKey === null) trailerKey = results[0].key;
    render.defaultIfraim();
    const trailer = document.querySelector(`.popup__body-trailer`);
    trailer.src = updateTrailerLink(trailerKey);
    popupEl.classList.remove('isHidden');
  },

  async genres() {
    const { genres } = await movieAPI.fetchGenresList();
    let object = { id: '', name: '' };
    genres.map(element => {
      object.id = element.id;
      object.name = element.name;
      this.genreList.push(object);
      object = { id: '', name: '' };
    });
    return this.genreList;
  },

  async searchMovies(event) {
    movieAPI.page = 1;
    const {
      target: { value: query },
    } = event;
    if (query.length === 0) {
      movieAPI.isActiveSearch = false;
      render.trend();
      render.loadMoreBtn();
      return;
    } else {
      movieAPI.query = query;
    }

    const { results, total_pages } = await movieAPI.fetchMovieByMovie();
    const moviesList = [...results].filter(
      element => element.backdrop_path != null
    );
    const removedElement = results.length - moviesList.length;
    if (removedElement > 0) {
      Notiflix.Notify.warning(`${removedElement} invalid elements were hidden`);
    }
    refs.galleryEl.replaceChildren();
    if (moviesList.length === 0) {
      Notiflix.Notify.failure(`
    No results were found for this query.`);
    } else {
      render.galleryMarkup(moviesList);
    }
    if (total_pages >= movieAPI.page + 1) render.loadMoreBtn();
  },

  async libaryFilms() {
    refs.libaryGalleryEl.innerHTML = '';
    const films = savedFilms.getAllFilms();
    try {
      if (films.length === 0) return;
      for (let i = 0; i < films.length; i++) {
        const result = await movieAPI.fetchMovieById(films[i]);
        render.libaryCard(result);
      }
    } catch (err) {
      console.log(err);
    }
  },

  async moreMovies() {
    movieAPI.page++;
    console.log(movieAPI.isActiveSearch);
    if (movieAPI.isActiveSearch) {
      const { results, total_pages } = await movieAPI.fetchMovieByMovie();
      const moviesList = [...results].filter(
        element => element.backdrop_path != null
      );
      const removedElement = results.length - moviesList.length;
      if (removedElement > 0) {
        Notiflix.Notify.warning(
          `${removedElement} invalid elements were hidden`
        );
      }
      render.moreTrendingFilms(moviesList);
      if (total_pages >= movieAPI.page + 1) render.loadMoreBtn();
    } else {
      const { results, total_pages } = await movieAPI.fetchTrendingMovie();
      render.moreTrendingFilms(results);
      if (total_pages >= movieAPI.page + 1) render.loadMoreBtn();
    }
  },
};

const updateTrailerLink = key => `https://www.youtube.com/embed/${key}`;
