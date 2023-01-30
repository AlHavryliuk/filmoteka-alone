// import { serializeToLS, savedFilms } from './serialize';
// import Notiflix from 'notiflix';

// const refs = {
//   popupEl: document.querySelector(`.popup`),
//   popUpContentEl: document.querySelector(`.popup__content`),
//   popupCloseBtn: document.querySelector(`[data-popup-close]`),
//   pseudoPopupTopEl: document.querySelector(`.pseudo-popup-top`),
//   pseudoPopuoBottomEl: document.querySelector(`.pseudo-popup-bottom`),
// };

// export const modalPopup = {
//   toggleHide() {
//     refs.popupEl.classList.toggle(`isHidden`);
//   },
//   addAnimattion() {
//     refs.popUpContentEl.classList.add('showPopupAnimation');
//     refs.pseudoPopupTopEl.classList.add('popupTopAnimation');
//     refs.pseudoPopuoBottomEl.classList.add('popupBottomAnimation');
//   },
//   addCloseAnimation() {
//     refs.popUpContentEl.classList.add('hidePopupAnimation');
//     refs.pseudoPopupTopEl.classList.add('popupTopHiddenAnimation');
//     refs.pseudoPopuoBottomEl.classList.add('popupBottomHiddenAnimation');
//   },
//   removeCloseAnimation() {
//     refs.popUpContentEl.classList.remove('hidePopupAnimation');
//     refs.pseudoPopupTopEl.classList.remove('popupTopHiddenAnimation');
//     refs.pseudoPopuoBottomEl.classList.remove('popupBottomHiddenAnimation');
//   },
//   removeAnimation() {
//     refs.popUpContentEl.classList.remove('showPopupAnimation');
//     refs.pseudoPopupTopEl.classList.remove('popupTopAnimation');
//     refs.pseudoPopuoBottomEl.classList.remove('popupBottomAnimation');
//   },
//   addModalListeners() {
//     refs.popupEl.addEventListener(`click`, closePopupFromOutside);
//     refs.popupCloseBtn.addEventListener(`click`, closeFromBtn);
//   },
//   addModalBtnListener() {
//     refs.popupAddWatchedBtn = document.querySelector(`.popup__addWatchedBtn`);
//     refs.popupAddQueueBtn = document.querySelector(`.popup__addQueueBtn`);
//     refs.popupAddWatchedBtn.addEventListener(`click`, saveFilmList);
//     refs.popupAddQueueBtn.addEventListener(`click`, saveFilmList);
//   },
//   removeModalBtnListener() {
//     refs.popupAddWatchedBtn.removeEventListener(`click`, saveFilmList);
//     refs.popupAddQueueBtn.removeEventListener(`click`, saveFilmList);
//   },
//   checkButtonAvailability() {
//     const libaryQueueBtn = document.querySelector('.popup__addQueueBtn');
//     const libaryWatchedBtn = document.querySelector(`.popup__addWatchedBtn`);
//     const movieId = libaryWatchedBtn.dataset.serializeId;
//     if (savedFilms.queueFilms.includes(movieId)) {
//       libaryQueueBtn.disabled = true;
//       libaryQueueBtn.innerHTML = `In Libary`;
//     } else {
//       libaryQueueBtn.disabled = false;
//       libaryQueueBtn.innerHTML = `Add to Queue`;
//     }
//     if (savedFilms.watchedFilms.includes(movieId)) {
//       libaryWatchedBtn.disabled = true;
//       libaryWatchedBtn.innerHTML = `In Libary`;
//     } else {
//       libaryWatchedBtn.disabled = false;
//       libaryWatchedBtn.innerHTML = `Add to Watched`;
//     }
//   },
// };

// const closePopupFromOutside = event => {
//   const { target } = event;
//   if (target === event.currentTarget) {
//     modalPopup.addCloseAnimation();
//     if (document.location.href.includes(`index`)) {
//       modalPopup.removeModalBtnListener();
//     }
//     modalPopup.removeAnimation();
//     setTimeout(() => {
//       modalPopup.toggleHide();
//       modalPopup.removeCloseAnimation();
//     }, 600);
//   }
// };

// const closeFromBtn = () => {
//   modalPopup.addCloseAnimation();
//   if (document.location.href.includes(`index`)) {
//     modalPopup.removeModalBtnListener();
//   }
//   modalPopup.removeAnimation();
//   setTimeout(() => {
//     modalPopup.toggleHide();
//     modalPopup.removeCloseAnimation();
//   }, 600);
//   //   ;
// };

// const saveFilmList = event => {
//   const { target } = event;
//   const movieId = target.dataset.serializeId;
//   const type = target.dataset.type;
//   try {
//     serializeToLS(movieId, type);
//     target.innerHTML = `In Libary`;
//     target.disabled = true;
//     Notiflix.Notify.success(`Successful!`);
//   } catch (err) {
//     console.log(err);
//   }
// };
