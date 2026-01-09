$(document).ready(function () {
  // initProductDetailGallery();
});

function initProductDetailGallery() {
  if (typeof Swiper === 'undefined') return;
  if (!$('.product_main_swiper').length) return;
  if (!$('.product_thumbs_swiper .swiper').length) return;

  const thumbs = new Swiper('.product_thumbs_swiper .swiper', {
    slidesPerView: 4,
    spaceBetween: 14,
    watchSlidesProgress: true,
    loop: false,
    allowTouchMove: true,
    breakpoints: {
      0: { slidesPerView: 4, spaceBetween: 12 },
      768: { slidesPerView: 4, spaceBetween: 14 },
    },
  });

  const main = new Swiper('.product_main_swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    speed: 450,
    loop: false,
    autoplay: false,          // ✅ quan trọng: tắt hẳn
    pagination: {
      el: '.product_pagination',
      clickable: true,
    },
    thumbs: { swiper: thumbs },
  });
}
