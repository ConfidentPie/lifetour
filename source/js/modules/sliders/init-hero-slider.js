const sliderHero = document.querySelector('.hero__swiper');
const sliderPagination = document.querySelector('.swiper-pagination');


const initSliderHero = () => {
  if (sliderHero) {
    // eslint-disable-next-line
    new Swiper(sliderHero, {

      pagination: {
        el: sliderPagination,
        clickable: true,
      },

      slidesPerView: 1,
      spaceBetween: 30,
    });
  }
};

export {initSliderHero};
