import { theMovieAPI } from './movieAPI';
import { render } from './renderMarkup';

const movieAPI = new theMovieAPI();

export const loadTrailer = async id => {
  const { results } = await movieAPI.fetchTreiler(id);
  const popupEl = document.querySelector(`.popup__trailer`);
  const trailer = document.querySelector(`.popup__body-trailer`);

  let trailerKey = null;
  results.map(element => {
    if (element.name.toLowerCase().includes(`official trailer`)) {
      trailerKey = element.key;
    }
  });
  trailer.src = updateTrailerLink(trailerKey);
  popupEl.classList.remove('isHidden');
};

const updateTrailerLink = key => `https://www.youtube.com/embed/${key}`;
