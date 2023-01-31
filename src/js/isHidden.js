export const hide = {
  moreElements(element, id) {
    element.forEach(element => {
      if (element.dataset.movieId === id) {
        element.classList.add(`isHidden`);
      }
    });
  },
  back(element) {},
};
