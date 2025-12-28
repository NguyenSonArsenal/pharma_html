$(document).ready(function() {
  initFaqAccordion();
});

function initFaqAccordion() {
  $(document).off('click.faq');
  $(document).on('click.faq', '.faq_question', function () {
    const $item = $(this).closest('.faq_item');
    $item.toggleClass('is_open');
  });
}
