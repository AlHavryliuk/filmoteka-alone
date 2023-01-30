import { refs } from './refs';
import { savedFilms } from './serialize';

// export const removeMovieFromLibary = id => {
//   localStorage.clear();
//   savedFilms.queueFilms = savedFilms.queueFilms.filter(
//     element => element != id
//   );
//   savedFilms.watchedFilms = savedFilms.watchedFilms.filter(
//     element => element != id
//   );
//   const galleryCardsLibEl = document.querySelectorAll(`.gallery__card-libary`);
//   console.log(galleryCardsLibEl);
//   galleryCardsLibEl.forEach(element => {
//     console.log(element.dataset.movieId);
//     if (element.dataset.movieId === id) {
//       element.remove();
//     }
//   });
//   if (savedFilms.watchedFilms.length != 0);
//   localStorage.setItem(`watched-movie-list`, savedFilms.watchedFilms);
//   if (savedFilms.queueFilms.length != 0)
//     localStorage.setItem(`queue-movie-list`, savedFilms.queueFilms);
// };
