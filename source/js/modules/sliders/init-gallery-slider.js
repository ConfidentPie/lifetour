const sliderInstructors = document.querySelector('.gallery__swiper');
const buttonNext = document.querySelector('.gallery__button--next');
const buttonPrev = document.querySelector('.gallery__button--prev');


const initSliderInstructors = () => {
  if (sliderInstructors) {
    // eslint-disable-next-line
    new Swiper(sliderInstructors, {

      navigation: {
        nextEl: buttonNext,
        prevEl: buttonPrev,
      },

      grid: {
        rows: 2,
        colums: 2,
      },

      breakpoints: {
        1200: {
          slidesPerView: 4,
          spaceBetween: 30,
        },

        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },

        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
      },
    });
  }
};

export {initSliderInstructors};
