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
      hGap = 30,
      vGap = 30,
      lefts = [0, width + hGap, 2 * (width + hGap)],
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
      var maxHeight;

      $('.loader').hide();

      $('.project').each(function (index) {
        var column = index % 3;

        $(this).css({
          'display': 'block',
          'left': lefts[column] + 'px',
          'top': tops[column] + 'px'
        });

        // Accumulate height
        tops[column] += $(this).height() + vGap;
      });

      // Set parent's height
      maxHeight = Math.max.apply(null, tops);
      $('.project-wap').css('height', maxHeight + 'px');
    });
  }
})();