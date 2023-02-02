import { libary } from './libManager';
import { loadData } from './loaderData';
import { modalPopup } from './modalPopup';
import { refs } from './refs';
import { savedFilms } from './serialize';

const actionСontroller = async event => {
  const { target, ctrlKey } = event;
  const id = target.dataset.movieId;
  if (id && ctrlKey) {
    libary.remove(id);
    return;
  }
  if (id != undefined) {
    modalPopup.openLibary(id);
  }
};

const libaryActive = () => {
  if (document.location.href.includes(`libary`)) {
    modalPopup.addModalListeners();
    refs.libaryWatchedBtn.addEventListener(`click`, savedFilms.filterMovieList);
    refs.libaryQueueBtn.addEventListener(`click`, savedFilms.filterMovieList);
    refs.libaryAllBtn.addEventListener(`click`, savedFilms.filterMovieList);
    refs.libaryGalleryEl.addEventListener(`click`, actionСontroller);
    loadData.libaryFilms();
  }
};

window.addEventListener(`load`, libaryActive);
