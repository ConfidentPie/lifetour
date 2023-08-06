import Swiper from '../../vendor/swiper';

const sliderHero = document.querySelector('.hero__swiper');
const sliderPagination = document.querySelector('.swiper-pagination');


const initSliderHero = () => {
  if (sliderHero) {

    const swiper = new Swiper(sliderHero, {

      pagination: {
        el: sliderPagination,
        clickable: true,
      },
      centeredSlides: true,
      slidesPerView: 1,
      spaceBetween: 30,
    });

    swiper.on('transitionStart', function (e) {
      if (e.activeIndex === 0) {
        document.querySelector('header').style.backgroundImage = 'url("../img/hero/caucasus-desktop@2x.webp")';
        document.querySelector('header').style.backgroundSize = 'cover';
      }
      if (e.activeIndex === 1) {
        document.querySelector('header').style.backgroundImage = 'url("../img/hero/kamchatka-desktop@2x.webp")';
        document.querySelector('header').style.backgroundSize = 'cover';
      }
      if (e.activeIndex === 2) {
        document.querySelector('header').style.backgroundImage = 'url("../img/hero/altai-desktop@2x.webp")';
        document.querySelector('header').style.backgroundSize = 'cover';
      }
    });
  }
};

export {initSliderHero};
