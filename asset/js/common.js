$( document ).ready(function() {
  console.log("js ready!");
  initHeader();
  initLanguagePc();
  initLanguageSp();
});

/* =========================
   LANGUAGE - PC
========================= */
function initLanguagePc() {
  // tránh bind trùng
  $(document).off('click.lang_btn');
  $(document).off('click.lang_item');

  $(document).on('click.lang_btn', '.header_lang_btn', function (e) {
    e.stopPropagation();
    $(this).closest('.header_lang').toggleClass('is_open');
  });

  $(document).on('click.lang_item', '.header_lang_item', function (e) {
    e.stopPropagation();

    const $item = $(this);
    const $wrap = $item.closest('.header_lang');

    $wrap.find('.header_lang_item').removeClass('is_active');
    $item.addClass('is_active');

    $wrap.find('.header_lang_text').text($item.find('span').text());
    $wrap.find('.header_flag').attr('src', $item.find('img').attr('src'));

    $wrap.removeClass('is_open');
  });
}

/* =========================
   LANGUAGE - MOBILE DRAWER
========================= */
function initLanguageSp() {
  const $drawer = $('.header_drawer');
  if (!$drawer.length) return;

  $drawer.off('click.drawer_lang_btn');
  $drawer.off('click.drawer_lang_item');

  $drawer.on('click.drawer_lang_btn', '.drawer_lang_btn', function (e) {
    e.stopPropagation();
    $(this).closest('.drawer_lang').toggleClass('is_open');
  });

  $drawer.on('click.drawer_lang_item', '.drawer_lang_item', function (e) {
    e.stopPropagation();

    const $item = $(this);
    const lang = $item.data('lang');
    const flag = $item.data('flag');
    const text = $item.find('span').text();

    const $wrap = $item.closest('.drawer_lang');

    $wrap.find('.drawer_lang_item').removeClass('is_active');
    $item.addClass('is_active');

    $wrap.find('.drawer_lang_text').text(text);
    $wrap.find('.drawer_lang_btn .header_flag').attr('src', flag);

    $wrap.removeClass('is_open');

    // sync desktop
    $('.header_lang_text').text(text);
    $('.header_lang .header_flag').attr('src', flag);
    $('.header_lang_item').removeClass('is_active');
    $(`.header_lang_item[data-lang="${lang}"]`).addClass('is_active');
  });
}

/* =========================
   HEADER (sticky + drawer)
========================= */
function initHeader() {
  const $header = $('.header');
  const $overlay = $('.header_overlay');
  const $drawer = $('.header_drawer');

  function openDrawer() {
    $header.addClass('is_open');
    $drawer.attr('aria-hidden', 'false');
    $('body').css('overflow', 'hidden');
  }

  function closeDrawer() {
    $header.removeClass('is_open');
    $drawer.attr('aria-hidden', 'true');
    $('body').css('overflow', '');
  }

  $header.off('click.header_toggle')
    .on('click.header_toggle', '.header_toggle', openDrawer);

  $header.off('click.drawer_close')
    .on('click.drawer_close', '.drawer_close', closeDrawer);

  $overlay.off('click.header_overlay')
    .on('click.header_overlay', closeDrawer);

  $(document).off('keydown.header_esc').on('keydown.header_esc', function (e) {
    if (e.key === 'Escape' && $header.hasClass('is_open')) closeDrawer();
  });

  $drawer.off('click.drawer_parent').on('click.drawer_parent', '.drawer_parent', function () {
    $(this).closest('.drawer_group').toggleClass('is_open');
  });

  $(window).off('scroll.header_scroll').on('scroll.header_scroll', function () {
    $header.toggleClass('is_scrolled', window.scrollY > 10);
  }).trigger('scroll');
}
