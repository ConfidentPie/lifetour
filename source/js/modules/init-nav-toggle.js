const nav = document.querySelector('.header__nav');
const toggle = document.querySelector('.header__nav-toggle');
const navLinks = document.querySelectorAll('.header__nav-link');
let body = document.body;

const initNavToggle = () => {
  nav.classList.remove('header__nav--nojs');

  const closeMenu = () => {
    nav.classList.remove('header__nav--opened');
    nav.classList.add('header__nav--closed');
    window.scrollLock.enableScrolling();
    body.classList.remove('overlay');
    document.removeEventListener('click', clickOutsideMenu);
    document.removeEventListener('keydown', escapePress);
  };

  const clickOutsideMenu = (event) => {
    if (!nav.contains(event.target) && !toggle.contains(event.target)) {
      closeMenu();
    }
  };

  const escapePress = (event) => {
    if (event.key === 'Escape') {
      closeMenu();
    }
  };

  toggle.addEventListener('click', function () {
    if (nav.classList.contains('header__nav--opened')) {
      closeMenu();
    } else {
      nav.classList.remove('header__nav--closed');
      nav.classList.add('header__nav--opened');
      window.scrollLock.disableScrolling();
      body.classList.add('overlay');
      document.addEventListener('click', clickOutsideMenu);
      document.addEventListener('keydown', escapePress);
    }
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });
};

export {initNavToggle};
