const sliderInstructors = document.querySelector('.instructors__swiper');
const buttonNext = document.querySelector('.instructors__button--next');
const buttonPrev = document.querySelector('.instructors__button--prev');


const initSliderInstructors = () => {
  if (sliderInstructors) {
    // eslint-disable-next-line
    new Swiper(sliderInstructors, {
      initialSlide: 0,
      cssMode: true,
      direction: 'horizontal',
      loop: false,

      navigation: {
        nextEl: buttonNext,
        prevEl: buttonPrev,
      },

      breakpoints: {
        1200: {
          slidesPerView: 4,
          spaceBetween: 30,
        },

        768: {
          slidesPerView: 3,
          spaceBetween: 30,
          initialSlide: 0,
        },

        320: {
          slidesPerView: 1,
          spaceBetween: 20,
          initialSlide: 0,
        },
      },
    });
  }
};

export {initSliderInstructors};
