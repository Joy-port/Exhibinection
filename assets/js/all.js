"use strict";

function _readOnlyError(name) { throw new TypeError("\"" + name + "\" is read-only"); }

//swipers
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
