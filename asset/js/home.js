$( document ).ready(function() {
  console.log( "ready!" );
  initHomeProductGallery();
  initExpertSlider();
});

function initExpertSlider() {
  new Swiper('.section_expert .swiper', {
    loop: true,
    autoplay: { delay: 4000, disableOnInteraction: false },
    slidesPerView: 2,
    spaceBetween: 24,
    speed: 500,
    pagination: {
      el: '.section_expert .swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      0: { slidesPerView: 1, spaceBetween: 16 },
      768: { slidesPerView: 2, spaceBetween: 24 },
    },
  });
}

function initHomeProductGallery() {
  if (typeof Swiper === 'undefined') return;
  if (!$('.product_main_swiper').length || !$('.product_thumbs_swiper .swiper').length) return;

  const thumbs = new Swiper('.product_thumbs_swiper .swiper', {
    slidesPerView: 4,
    spaceBetween: 14,
    watchSlidesProgress: true,
    loop: false,
    breakpoints: {
      0: { slidesPerView: 4, spaceBetween: 12 },
      768: { slidesPerView: 4, spaceBetween: 14 },
    },
  });

  const main = new Swiper('.product_main_swiper', {
    slidesPerView: 1,        // ✅ bắt buộc
    spaceBetween: 10,
    speed: 500,
    loop: false,
    pagination: {
      el: '.product_pagination',
      clickable: true,
    },
    thumbs: { swiper: thumbs }
  });
}

