const sliderFeatures = document.querySelector('.features__swiper');
const buttonNext = document.querySelector('.features__button--next');
const buttonPrev = document.querySelector('.features__button--prev');
let mySwiper;

const initSliderFeatures = () => {
  if (sliderFeatures && innerWidth > 1200) {
    // eslint-disable-next-line
    mySwiper = new Swiper(sliderFeatures, {
      loop: true,
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

const destroySwiperIfNeeded = () => {
  if (window.innerWidth < 1200 && mySwiper) {
    mySwiper.destroy();
    document.querySelector('.features__swiper').style.display = 'block';
  } else if (!mySwiper.initialized) {
    initSliderFeatures();
  }
};

export {initSliderFeatures, destroySwiperIfNeeded};
