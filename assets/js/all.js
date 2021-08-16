"use strict";

function _readOnlyError(name) { throw new TypeError("\"" + name + "\" is read-only"); }

//swipers
//https://swiperjs.com/demos
//https://github.com/Hsuan777/2021SlicesWeek6/blob/develop/app/assets/js/all.js
var swiper = new Swiper(".swiper-js", {
  slidesPerView: 1,
  spaceBetween: 0,
  centeredSlides: false,
  breakpoints: {
    576: {
      slidesPerView: 1,
      spaceBetween: 0,
      centeredSlides: false
    },
    768: {
      slidesPerView: 2.5,
      spaceBetween: 15,
      centeredSlides: false
    },
    992: {
      slidesPerView: 2.75,
      spaceBetween: 30,
      centeredSlides: true
    }
  }
}); //ticket submit//notyet done

var ticketSubmit = document.querySelector('.ticket-purchase-done');
addEventListener("click", function (e) {
  if (e.target.getAttribute("class") !== "ticket-purchase-done") {
    console.log('這邊不用顯示alert');
    return;
  } else {
    console.log('這邊需要顯示alert');
    alert("訂購已完成，請至信箱查看相關訂購資訊");
  }
}), _readOnlyError("ticketSubmit");
//# sourceMappingURL=all.js.map
