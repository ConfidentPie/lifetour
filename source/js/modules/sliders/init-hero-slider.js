import Swiper from '../../vendor/swiper';

const sliderHero = document.querySelector('.hero__swiper');
const sliderPagination = document.querySelector('.swiper-pagination');


const initSliderHero = () => {
  if (sliderHero) {

    const swiper = new Swiper(sliderHero, {
      initialSlide: 0,
      cssMode: true,
      direction: 'horizontal',

      pagination: {
        el: sliderPagination,
        clickable: true,
      },
      centeredSlides: true,
      slidesPerView: 1,
      spaceBetween: 30,
    });

    swiper.on('transitionStart', function (e) {
      const header = document.querySelector('header');

      if (e.activeIndex === 0) {
        if (window.innerWidth >= 768 && window.innerWidth < 1200) {
          header.style.backgroundImage = 'url("img/hero/caucasus-tablet@2x.webp")';
        } else if (window.innerWidth < 768) {
          header.style.backgroundImage = 'url("img/hero/caucasus-mobile@2x.webp")';
        } else {
          header.style.backgroundImage = 'url("img/hero/caucasus-desktop@2x.webp")';
        }
      }
      if (e.activeIndex === 1) {
        if (window.innerWidth >= 768 && window.innerWidth < 1200) {
          header.style.backgroundImage = 'url("img/hero/kamchatka-tablet@2x.webp")';
        } else if (window.innerWidth < 768) {
          header.style.backgroundImage = 'url("img/hero/kamchatka-mobile@2x.webp")';
        } else {
          header.style.backgroundImage = 'url("img/hero/kamchatka-desktop@2x.webp")';
        }
      }
      if (e.activeIndex === 2) {
        if (window.innerWidth >= 768 && window.innerWidth < 1200) {
          header.style.backgroundImage = 'url("img/hero/altai-tablet@2x.webp")';
        } else if (window.innerWidth < 768) {
          header.style.backgroundImage = 'url("img/hero/altai-mobile@2x.webp")';
        } else {
          header.style.backgroundImage = 'url("img/hero/altai-desktop@2x.webp")';
        }
      }
      header.style.backgroundSize = 'cover';
    });
  }
};

export {initSliderHero};
