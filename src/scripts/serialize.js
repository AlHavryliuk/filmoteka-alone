export const savedFilms = {
  watchedFilms:
    localStorage.getItem(`watched-movie-list`) != null &&
    localStorage.getItem(`watched-movie-list`) != ''
      ? localStorage.getItem(`watched-movie-list`).split(`,`)
      : [],
  queueFilms:
    localStorage.getItem(`queue-movie-list`) != null &&
    localStorage.getItem(`queue-movie-list`) != ''
      ? localStorage.getItem(`queue-movie-list`).split(`,`)
      : [],
  getAllFilms() {
    const filmList = [...this.watchedFilms, ...this.queueFilms];
    return filmList.filter(
      (course, index, allFilms) => allFilms.indexOf(course) === index
    );
  },
  filterMovieList(event) {
    const { target } = event;
    removeActiveBtnStatus();
    target.classList.add(`isActive`);
    const cards = document.querySelectorAll(`.gallery__card-libary`);
    if (target.dataset.libaryType === `all`) {
      return cards.forEach(element => {
        element.classList.remove(`isHiddenStrong`);
      });
    }
    const filmCategory =
      target.dataset.libaryType === `watched`
        ? savedFilms.watchedFilms
        : savedFilms.queueFilms;
    cards.forEach(element => element.classList.remove(`isHiddenStrong`));
    cards.forEach(element => {
      const movieId = element.dataset.movieId;
      if (!filmCategory.includes(movieId)) {
        element.classList.add(`isHiddenStrong`);
      }
    });
  },
};

const removeActiveBtnStatus = () => {
  const btns = document.querySelectorAll(`.header__libary-buttons button`);
  btns.forEach(element => element.classList.remove(`isActive`));
};

export const serializeToLS = (id, type) => {
  if (!savedFilms.watchedFilms.includes(id)) {
    savedFilms.watchedFilms.push(id);
  }
  switch (type) {
    case `watched`:
      !savedFilms.watchedFilms.includes(id)
        ? savedFilms.watchedFilms.push(id)
        : -1;
      localStorage.setItem(`watched-movie-list`, savedFilms.watchedFilms);
      break;
    case `queue`:
      !savedFilms.queueFilms.includes(id) ? savedFilms.queueFilms.push(id) : -1;
      localStorage.setItem(`queue-movie-list`, savedFilms.queueFilms);
      break;
  }
};
