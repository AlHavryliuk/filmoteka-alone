import { theMovieAPI } from './movieAPI';
import { modalPopup } from './modalPopup';
import { render } from './renderMarkup';
import Notiflix from 'notiflix';
import { refs } from './refs';

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

  async trailer(id) {
    const { results } = await movieAPI.fetchTreiler(id);
    const popupEl = document.querySelector(`.popup__trailer`);
    let trailerKey = null;
    results.map(element => {
      if (element.name.toLowerCase().includes(`official trailer`)) {
        trailerKey = element.key;
      }
    });
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
    const {
      target: { value: query },
    } = event;
    if (query.length === 0) return render.trend();
    const { results } = await movieAPI.fetchMovieByMovie(query);
    const moviesList = results.filter(element => element.backdrop_path != null);
    refs.galleryEl.innerHTML = '';
    if (moviesList.length === 0) {
      Notiflix.Notify.failure(`
    No results were found for this query.`);
    } else {
      render.galleryMarkup(moviesList);
    }
  },
};

const updateTrailerLink = key => `https://www.youtube.com/embed/${key}`;
