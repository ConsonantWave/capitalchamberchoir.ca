$(document).ready(function() {
  $('#' + linkName + 'Link').addClass('selected');
  if ($('#gallery').length > 0) {
    Galleria.loadTheme('/js/galleria/themes/classic/galleria.classic.min.js');
    $('#gallery').galleria({
      height: 500
    });
  }
});
