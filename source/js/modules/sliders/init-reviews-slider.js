const sliderReviews = document.querySelector('.reviews__swiper');
const buttonNext = document.querySelector('.reviews__button--next');
const buttonPrev = document.querySelector('.reviews__button--prev');


const initSliderReviews = () => {
  if (sliderReviews) {
    // eslint-disable-next-line
    new Swiper(sliderReviews, {

      navigation: {
        nextEl: buttonNext,
        prevEl: buttonPrev,
      },

      breakpoints: {
        1200: {
          centeredSlides: true,
          slidesPerView: 'auto',
          spaceBetween: 30,
        },

        768: {
          slidesPerView: 'auto',
          spaceBetween: 30,
          initialSlide: 0,
        },

        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
      },
    });
  }
};

export {initSliderReviews};
