const sliderGallery = document.querySelector('.gallery__swiper');
const buttonNext = document.querySelector('.gallery__button--next');
const buttonPrev = document.querySelector('.gallery__button--prev');


const initSliderGallery = () => {
  if (sliderGallery) {
    // eslint-disable-next-line
    new Swiper(sliderGallery, {
      slidesPerView: 'auto',
      spaceBetween: 5,
      navigation: {
        nextEl: buttonNext,
        prevEl: buttonPrev,
      },
    });
  }
};

export {initSliderGallery};
