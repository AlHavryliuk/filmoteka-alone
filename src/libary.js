import { theMovieAPI } from './scripts/movieAPI';
import { modalPopup } from './scripts/modalPopup';
import { render } from './scripts/renderMarkup';
import { refs } from './scripts/refs';
import { savedFilms } from './scripts/serialize';
import { removeMovieFromLibary } from './scripts/libaryManager';

const movieAPI = new theMovieAPI();

const start = () => {
  if (document.location.href.includes(`libary`)) {
    refs.libaryWatchedBtn.addEventListener(`click`, savedFilms.filterMovieList);
    refs.libaryQueueBtn.addEventListener(`click`, savedFilms.filterMovieList);
    refs.libaryAllBtn.addEventListener(`click`, savedFilms.filterMovieList);
    // refs.libaryGalleryEl.addEventListener(`dblclick`, removeMovie);
    refs.libaryGalleryEl.addEventListener(`click`, openTrailerPopup);
    loadLibaryFilms();
  }
};

const removeMovie = id => removeMovieFromLibary(id);

const loadTrailer = async id => {
  const { results } = await movieAPI.fetchTreiler(id);
  console.log(results);
  let offTrailerKey = null;
  results.map(element => {
    if (element.name.toLowerCase().includes(`official trailer`)) {
      offTrailerKey = element.key;
    }
  });
  if (offTrailerKey === null) offTrailerKey = results[0].key;
  render.trailerPopup(offTrailerKey);
};

const openTrailerPopup = event => {
  const { target, ctrlKey } = event;
  const id = target.dataset.movieId;
  console.log(id != undefined && ctrlKey);
  if (id && ctrlKey) {
    removeMovie(id);
    return;
  }
  if (id != undefined) loadTrailer(id);
  modalPopup.toggleHide();
  modalPopup.addAnimattion();
  modalPopup.addModalListeners();
};

const loadLibaryFilms = async () => {
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
};

// window.addEventListener(`load`, start)
