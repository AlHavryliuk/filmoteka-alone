import { savedFilms } from './serialize';
import { modalPopup } from './modalPopup';
import { theMovieAPI } from './movieAPI';
import { render } from './renderMarkup';
import { hide } from './isHidden';
import Notiflix from 'notiflix';
import { refs } from './refs';


const movieAPI = new theMovieAPI();

const libaryActive = () => {
  if (document.location.href.includes(`libary`)) {
    refs.libaryWatchedBtn.addEventListener(`click`, savedFilms.filterMovieList);
    refs.libaryQueueBtn.addEventListener(`click`, savedFilms.filterMovieList);
    refs.libaryAllBtn.addEventListener(`click`, savedFilms.filterMovieList);
    refs.libaryGalleryEl.addEventListener(`click`, openTrailerPopup);
    loadLibaryFilms();
  }
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

const removeMovieFromLibary = id => {
  localStorage.clear();
  removeMovies(id);
  if (savedFilms.watchedFilms.length != 0)
    localStorage.setItem(`watched-movie-list`, savedFilms.watchedFilms);
  if (savedFilms.queueFilms.length != 0)
    localStorage.setItem(`queue-movie-list`, savedFilms.queueFilms);
};

const removeMovies = id => {
  const galleryCardsLibEl = document.querySelectorAll(`.gallery__card-libary`);
  const targetList = savedFilms.targetList();
  switch (targetList) {
    case `all`:
      console.log(`Remove from all`);
      savedFilms.queueFilms = savedFilms.queueFilms.filter(
        element => element != id
      );
      savedFilms.watchedFilms = savedFilms.watchedFilms.filter(
        element => element != id
      );
      galleryCardsLibEl.forEach(element => {
        if (element.dataset.movieId === id) {
          element.remove();
        }
      });
      Notiflix.Notify.success(`
The movie has been successfully removed from your library`);
      break;
    case `watched`:
      savedFilms.watchedFilms = savedFilms.watchedFilms.filter(
        element => element != id
      );
      if (savedFilms.queueFilms.includes(id)) {
        hide.moreElements(galleryCardsLibEl, id);
        Notiflix.Notify.success(`
The movie has been successfully removed from your "Watched"`);
      } else {
        galleryCardsLibEl.forEach(element => {
          if (element.dataset.movieId === id) {
            element.remove();
          }
        });
        Notiflix.Notify.success(`
The movie has been successfully removed from your library`);
      }
      break;
    case `queue`:
      savedFilms.queueFilms = savedFilms.queueFilms.filter(
        element => element != id
      );
      if (savedFilms.watchedFilms.includes(id)) {
        hide.moreElements(galleryCardsLibEl, id);
        Notiflix.Notify.success(`
The movie has been successfully removed from your "Queue"`);
      } else {
        galleryCardsLibEl.forEach(element => {
          if (element.dataset.movieId === id) {
            element.remove();
          }
        });
      }
      break;
  }
};

const loadTrailer = async id => {
  const { results } = await movieAPI.fetchTreiler(id);
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
  if (id && ctrlKey) {
    removeMovieFromLibary(id);
    return;
  }
  if (id != undefined) {
    loadTrailer(id);
    modalPopup.toggleHide();
    modalPopup.addAnimattion();
    modalPopup.addModalListeners();
  }
};

window.addEventListener(`load`, libaryActive);
