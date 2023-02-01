import { theMovieAPI } from './movieAPI';
import { modalPopup } from './modalPopup';
import { render } from './renderMarkup';
import { refs } from './refs';
import throttle from 'lodash/throttle';
import Notiflix from 'notiflix';

const movieAPI = new theMovieAPI();

export const genreArray = [];

const loadTrendingMovie = async () => {
  try {
    const { results } = await movieAPI.fetchTrendingMovie();
    render.galleryMarkup(results, true);
  } catch (err) {
    console.log(err);
  }
};

const loadAllGenres = async () => {
  const { genres } = await movieAPI.fetchGenresList();
  let object = { id: '', name: '' };
  genres.map(element => {
    object.id = element.id;
    object.name = element.name;
    genreArray.push(object);
    object = { id: '', name: '' };
  });
  return genreArray;
};

const loadMoreInfo = async movieId => {
  const results = await movieAPI.fetchMovieById(movieId);
  render.popupMarkup(results);
  modalPopup.addAnimattion();
};

const loadSearchMovies = async event => {
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
};

const openPopup = async ({ target }) => {
  const movieId = target.dataset.movieId;
  await loadMoreInfo(movieId);
  modalPopup.addModalBtnListener();
  modalPopup.checkButtonAvailability();
  modalPopup.toggleHide();
};

const escapeTrailer = () => {
  console.log(`ok`);
  refs.popupTrailerEl.classList.add('isHidden');
};

const start = async () => {
  if (document.location.href.includes(`index`)) {
    loadAllGenres();
    await loadTrendingMovie();
    await modalPopup.addModalListeners();
    refs.popupTrailerEl.addEventListener(`click`, escapeTrailer);
    refs.galleryEl.addEventListener(`click`, openPopup);
    refs.inputSearchEl.addEventListener(
      `input`,
      throttle(loadSearchMovies, 1000)
    );
  }
};

window.addEventListener(`load`, start);
