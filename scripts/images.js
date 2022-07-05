(function() {
  var i, images, nextimg;

  images = document.querySelectorAll('img.halloffame');

  i = 0;

  nextimg = function() {
    var el, j;
    j = 0;
    while (j < images.length) {
      el = images[j];
      if (el === images[i]) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
      j++;
    }
    if (i < images.length - 1) {
      return i++;
    } else {
      return i = 0;
    }
  };

  setInterval(nextimg, 2500);

}).call(this);
