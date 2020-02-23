(function() {
  // BRIGHTNESS CONTROL
  var rangeContainer = document.getElementsByClassName('brightness-control__range-container')[0];
  var brRange = rangeContainer.getElementsByClassName('brightness-control__range')[0];
  var brRangeTrackFilled = rangeContainer.getElementsByClassName('brightness-control__range-track-filled')[0];
  var brRangeThumb = rangeContainer.getElementsByClassName('brightness-control__range-thumb')[0];

  renderBrightnessRange = function(val) {
    var percent = ((val + 1) * 100 / 2);
    //console.log(val, percent);
    brRangeTrackFilled.style.width = percent + '%';
    brRangeThumb.style.transform = 'translateX(' + percent + '%)';
  };

  brRange.addEventListener('input', function(e) {
    var val = parseFloat(e.target.value);
    renderBrightnessRange(val);
  });

  renderBrightnessRange(parseFloat(brRange.value));

  // COLORWHEEL
  // var colorWheelElement = document.getElementById('colorWheel');
  // var colorWheel = Raphael.colorwheel(colorWheelElement, 220, 400);

})();
