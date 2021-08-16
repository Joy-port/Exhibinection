"use strict";

function _readOnlyError(name) { throw new TypeError("\"" + name + "\" is read-only"); }

//swipers
//https://swiperjs.com/demos
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
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
