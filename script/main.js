/**
 * Created by hustlzp on 14-3-16.
 */

// Water fall layout
function waterfall() {
  var width = 308,
    h_gap = 30,
    v_gap = 30;

  var lefts = [0, width + h_gap, 2 * (width + h_gap)],
    tops = [0, 0, 0];

  // Init css style
  $('.project').each(function (index) {
    $(this).css({
      'width': width + 'px',
      'display': 'none'
    });
  });

  // Wait for all images loaded
  $('.project-wap').imagesLoaded(function () {
    $('.loader').hide();

    $('.project').each(function (index) {
      $(this).css({
        'display': 'block',
        'left': lefts[index % 3] + 'px',
        'top': tops[index % 3] + 'px'
      });

      // Accumulate height
      tops[index % 3] += $(this).height() + v_gap;

      // Set parent wap height
      var maxHeight = 0;
      for (var i = 0; i < tops.length; i++) {
        if (tops[i] > maxHeight) {
          maxHeight = tops[i];
        }
      }

      $('.project-wap').css('height', maxHeight + 'px');
    });
  });
}

$(function () {
  $('.contacts a').tooltip();

  waterfall();
});