let nav = document.querySelector('.header__nav');
let toggle = document.querySelector('.header__nav-toggle');
let body = document.body;

const initNavToggle = () => {
  nav.classList.remove('header__nav--nojs');

  toggle.addEventListener('click', function () {
    if (nav.classList.contains('header__nav--opened')) {
      nav.classList.remove('header__nav--opened');
      nav.classList.add('header__nav--closed');
      window.scrollLock.enableScrolling();
      body.classList.remove('overlay');
    } else {
      nav.classList.remove('header__nav--closed');
      nav.classList.add('header__nav--opened');
      window.scrollLock.disableScrolling();
      body.classList.add('overlay');
    }
  });
};

export {initNavToggle};
