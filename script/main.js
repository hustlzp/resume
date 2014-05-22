(function () {
  $(function () {
    var ieVersion = checkIE();

    // Redirect to Browse Happy when IE.version < 8
    if (ieVersion && ieVersion < 8) {
      window.location = 'http://browsehappy.com';
    }

    $('.contacts a').tooltip();

    waterfall();

    // Spoof the browser into thinking it is Retina
    // comment the next line out to make sure it works without retina
    window.devicePixelRatio = 2;
  });

  /**
   * Check IE version.
   * @returns {Number|Boolean} IE.version, false means not IE or IE.version >= 10
   */
  function checkIE() {
    var v = 3,
      div = document.createElement('div'),
      all = div.getElementsByTagName('i');

    while (true) {
      v++;
      div.innerHTML = '<!--[if gt IE ' + v + ']><i></i><![endif]-->';
      if (!all[0]) {
        break;
      }
    }

    return (v > 4) ? v : false;
  }

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