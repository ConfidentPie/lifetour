import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {initVideoPlayer} from './modules/init-video-player';
import {Form} from './modules/form-validate/form';
import {initLeaflet} from './modules/leaflet/init-leaflet';
import {getSlidesTabs} from './modules/sliders/get-slide-tabs';
import {initSliderHero} from './modules/sliders/init-hero-slider';
import {initSliderTours} from './modules/sliders/init-tours-slider';
import {initSliderInstructors} from './modules/sliders/init-instructors-slider';
import {initSliderReviews} from './modules/sliders/init-reviews-slider';
import {initSliderFeatures, handleResize} from './modules/sliders/init-features-slider';
import {initSliderGallery} from './modules/sliders/init-gallery-slider';
import {initNavToggle} from './modules/init-nav-toggle';
import './utils/scroll-lock';


// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils

  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    const form = new Form();
    window.form = form;
    form.init();
    initNavToggle();
    initVideoPlayer();
    initLeaflet();
    getSlidesTabs();
    initSliderHero();
    initSliderTours();
    initSliderInstructors();
    initSliderReviews();
    initSliderFeatures();
    handleResize();
    initSliderGallery();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
