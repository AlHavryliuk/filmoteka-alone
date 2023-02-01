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
    // alert(`1`);
    const { target } = event;
    // alert(target);
    // targetList = target.dataset.libaryType;
    // alert(targetList);
    removeActiveBtnStatus();
    target.classList.add(`isActive`);
    target.disabled = true;
    const cards = document.querySelectorAll(`.gallery__card-libary`);
    if (target.dataset.libaryType === `all`) {
      return cards.forEach(element => {
        element.classList.remove(`isHidden`);
      });
    }
    const filmCategory =
      target.dataset.libaryType === `watched`
        ? savedFilms.watchedFilms
        : savedFilms.queueFilms;
    cards.forEach(element => element.classList.remove(`isHidden`));
    cards.forEach(element => {
      const movieId = element.dataset.movieId;
      if (!filmCategory.includes(movieId)) {
        element.classList.add(`isHidden`);
      }
    });
  },
  targetList() {
    const btns = document.querySelectorAll(`.header__libary-buttons button`);
    let result;
    btns.forEach(element => {
      if (element.classList.value === 'isActive') {
        console.log(element.dataset.libaryType);
        result = element.dataset.libaryType;
      }
    });
    return result;
  },
};

const removeActiveBtnStatus = () => {
  const btns = document.querySelectorAll(`.header__libary-buttons button`);
  btns.forEach(element => {
    element.classList.remove(`isActive`);
    element.disabled = false;
  });
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
