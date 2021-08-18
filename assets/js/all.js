"use strict";

//Aos
AOS.init(); //swipers
//https://swiperjs.com/demos
//https://github.com/Hsuan777/2021SlicesWeek6/blob/develop/app/assets/js/all.js

var swiper = new Swiper(".swiper-js", {
  slidesPerView: 1,
  spaceBetween: 0,
  breakpoints: {
    576: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
      centeredSlides: false
    }
  }
});
//# sourceMappingURL=all.js.map