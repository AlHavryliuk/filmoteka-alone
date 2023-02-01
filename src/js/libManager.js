import { savedFilms } from './serialize';
import { hide } from './isHidden';
import Notiflix from 'notiflix';
import { modalPopup } from './modalPopup';

export const libary = {
  remove(id) {
    if (isNaN(id)) {
      id = id.target.dataset.serializeId;
      modalPopup.toggleHide();
    }
    localStorage.clear();
    removeMovies(id);
    if (savedFilms.watchedFilms.length != 0)
      localStorage.setItem(`watched-movie-list`, savedFilms.watchedFilms);
    if (savedFilms.queueFilms.length != 0)
      localStorage.setItem(`queue-movie-list`, savedFilms.queueFilms);
  },
};

const removeMovies = id => {
  const galleryCardsLibEl = document.querySelectorAll(`.gallery__card-libary`);
  const targetList = savedFilms.targetList();
  switch (targetList) {
    case `all`:
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
