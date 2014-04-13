/**
 * Created by hustlzp on 14-3-16.
 */

// Water fall layout
function waterfall() {
  var width = 308,
    h_gap = 30,
    v_gap = 20;

  var lefts = [0, width + h_gap, 2 * (width + h_gap)],
    tops = [0, 0, 0];

  // Init css style
  $('.project').each(function (index) {

    $(this).css({
      'width': width + 'px',
      'display': 'none',
      'position': 'absolute'
    });
  });

  $('.project-wap').imagesLoaded().progress(function (instance, image) {
    // Get the min height column
    var img = image.img;
    var minHeight = tops[0];
    var minHeightColumn = 0;
    var project = $(img).parents('.project').first();

    // Find the min height column
    for (var i = 0; i < tops.length; i++) {
      if (tops[i] < minHeight) {
        minHeight = tops[i];
        minHeightColumn = i;
      }
    }

    project.css({
      'display': 'block',
      'left': lefts[minHeightColumn] + 'px',
      'top': tops[minHeightColumn] + 'px'
    });

    // Accumulate height
    tops[minHeightColumn] += project.height() + v_gap;

    // Set parent wap height
    var maxHeight = 0;
    for (var i = 0; i < tops.length; i++) {
      if (tops[i] > maxHeight) {
        maxHeight = tops[i];
      }
    }

    $('.project-wap').css('height', maxHeight + 'px');
  });
}

$(function () {
  $('.contacts a').tooltip();

  waterfall();
});