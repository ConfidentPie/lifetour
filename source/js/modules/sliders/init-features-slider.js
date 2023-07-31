const sliderFeatures = document.querySelector('.features__swiper');
const buttonNext = document.querySelector('.features__button--next');
const buttonPrev = document.querySelector('.features__button--prev');

const initSliderFeatures = () => {
  if (sliderFeatures && innerWidth > 768) {
    // eslint-disable-next-line
    new Swiper(sliderFeatures, {

      navigation: {
        nextEl: buttonNext,
        prevEl: buttonPrev,
      },

      centeredSlides: true,

      breakpoints: {
        1200: {
          slidesPerView: 3.6,
          spaceBetween: 30,
        },
      },
    });
  }
};

export {initSliderFeatures};
