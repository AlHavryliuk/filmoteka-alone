import { modalPopup } from './modalPopup';
import { refs } from './refs';
import throttle from 'lodash/throttle';
import { loadData } from './loaderData';
import { render } from './renderMarkup';

const start = async () => {
  if (document.location.href.includes(`index`)) {
    await loadData.genres();
    await loadData.trends();
    modalPopup.addModalListeners();
    render.loadMoreBtn()
    refs.galleryEl.addEventListener(`click`, modalPopup.open);
    refs.inputSearchEl.addEventListener(
      `input`,
      throttle(loadData.searchMovies, 1000)
    );
  }
};

window.addEventListener(`load`, start);
