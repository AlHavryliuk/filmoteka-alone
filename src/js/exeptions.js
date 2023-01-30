import Notiflix from 'notiflix';

export const notFoundExeptions = () =>
  Notiflix.Notify.failure('Oops, there is no country with that name');
