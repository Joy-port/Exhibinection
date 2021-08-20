//Aos
AOS.init({
  once: true,
});

//swipers
//https://swiperjs.com/demos
//https://github.com/Hsuan777/2021SlicesWeek6/blob/develop/app/assets/js/all.js
var swiper = new Swiper(".swiper-js", {
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  
  breakpoints: {
    576: {
      slidesPerView: 1,
      spaceBetween: 0,
  
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 15,
  
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
      centeredSlides: false,
    },
  },
});

//bs5 validation 
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()