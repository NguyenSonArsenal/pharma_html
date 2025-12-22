$( document ).ready(function() {
  console.log( "ready!" );
  initExpertSlider();
});

function initExpertSlider() {
  const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: { delay: 4000, disableOnInteraction: false },
    slidesPerView: 2,
    spaceBetween: 24,
    speed: 500,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      0: { slidesPerView: 1, spaceBetween: 16 },
      768: { slidesPerView: 2, spaceBetween: 24 },
    },
  });
}
