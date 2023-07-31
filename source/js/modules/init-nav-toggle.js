let nav = document.querySelector('.header__nav');
let toggle = document.querySelector('.header__nav-toggle');


const initNavToggle = () => {
  nav.classList.remove('header__nav--nojs');
  nav.classList.remove('header__nav--opened');
  nav.classList.add('header__nav--closed');

  toggle.addEventListener('click', function () {
    if (nav.classList.contains('header__nav--opened')) {
      nav.classList.remove('header__nav--opened');
      nav.classList.add('header__nav--closed');
    } else {
      nav.classList.remove('header__nav--closed');
      nav.classList.add('header__nav--opened');
    }
  });
};

export {initNavToggle};
