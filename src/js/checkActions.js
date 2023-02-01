export const checkAction = () => {
  let x;
  addEventListener('touchstart', e => (x = e.changedTouches[0].clientX));
  addEventListener(
    'touchend',
    e => e.changedTouches[0].clientX - x < -50 && swipeLeft()
  );

  function swipeLeft() {
    alert('swipe left');
  }
};
