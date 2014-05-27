(function () {
  // Ban old browsers via CSS3 border-image detect, see:
  // [1] http://caniuse.com/#search=border-image
  // [2] http://www.w3schools.com/cssref/css3_browsersupport.asp
  if (!Modernizr.borderimage) {
    window.location = 'http://browsehappy.com';
  }

  $(function () {
    $('.contacts a').tooltip();

    waterfall();
  });

  /**
   * Waterfall layout.
   */
  function waterfall() {
    var width = 308,
      h_gap = 30,
      v_gap = 30,
      lefts = [0, width + h_gap, 2 * (width + h_gap)],
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
        var maxHeight,
          column = index % 3;

        $(this).css({
          'display': 'block',
          'left': lefts[column] + 'px',
          'top': tops[column] + 'px'
        });

        // Accumulate height
        tops[column] += $(this).height() + v_gap;

        // Set parent's height
        maxHeight = Math.max.apply(null, tops);
        $('.project-wap').css('height', maxHeight + 'px');
      });
    });
  }
})();