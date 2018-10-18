function include(scriptUrl) {
  document.write('<script src="' + scriptUrl + '"></script>');
}

(function($) {
  var o = document.getElementById("google-map");
  if (o) {
    include('//maps.google.com/maps/api/js?sensor=false');
    include('js/jquery.rd-google-map.js');
    $(document).ready(function() {
      var o = $('#google-map');
      if (o.length > 0) {
        o.googleMap({
          styles: [{
            "featureType": "administrative",
            "elementType": "all",
            "stylers": [{
              "visibility": "on"
            }, {
              "lightness": 33
            }]
          }, {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [{
              "color": "#f2e5d4"
            }]
          }, {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [{
              "color": "#c5dac6"
            }]
          }, {
            "featureType": "poi.park",
            "elementType": "labels",
            "stylers": [{
              "visibility": "on"
            }, {
              "lightness": 20
            }]
          }, {
            "featureType": "road",
            "elementType": "all",
            "stylers": [{
              "lightness": 20
            }]
          }, {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [{
              "color": "#c5c6c6"
            }]
          }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
              "color": "#e4d7c6"
            }]
          }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
              "color": "#fbfaf7"
            }]
          }, {
            "featureType": "water",
            "elementType": "all",
            "stylers": [{
              "visibility": "on"
            }, {
              "color": "#acbcc9"
            }]
          }]
        });
      }
    });
  }
})(jQuery);;

(function($) {
  var o = $('.countdown');
  if (o.length > 0) {
    include('js/jquery.plugin.js');
    include('js/jquery.countdown.js');
    $(document).ready(function() {
      var date = new Date(),
        countTo = new Date(2019, 1, 14);
      $(o).countdown({
        until: countTo,
        padZeroes: true
      });
    });
  }
})(jQuery);;

(function($) {
  var o = $('.thumb');
  if (o.length > 0) {
    include('js/jquery.fancybox.js');
    include('js/jquery.fancybox-media.js');
    include('js/jquery.fancybox-buttons.js');
    $(document).ready(function() {
      o.fancybox();
    });
  }
})(jQuery);;

//активация кнопки "наверх"
$(window).scroll(function() {
  if ($(this).scrollTop() > 30) {
    $('.js-to-top').addClass('is-active');
  } else {
    $('.js-to-top').removeClass('is-active');
  }
});

//скролл наверх при нажитии кнопки "наверх"
$('.js-to-top').click(function() {
  $('body, html').animate({
    scrollTop: 0
  }, 300);
  return false;
});