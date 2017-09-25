$(document).on('ready', function() {
  $('.case-slider').unslider({
     animation: 'fade',
     autoplay: true,
     dots: false,
     keys: true,
     fluid: false,
     nav: false,              //  Display dot navigation
     speed: 500,               //  The speed to animate each slide (in milliseconds)
      arrows: {
      prev: '<a class="unslider-arrow prev"><i class="icon-arrow_left"/></i></a>',
      next: '<a class="unslider-arrow next"><i class="icon-arrow_right"/></i></a>'
    }
  });

  // Button scroll
  $("#button-scroll").click(function() {
    $("html, body").animate({
        scrollTop: $("#about-tamtam").offset().top
    });
  });
  // Toogle mobile navigation
  $( "#button-nav" ).click(function() {
    $("#navigation-container").toggleClass("show");
    $("#button-nav").toggleClass("close");


});

});
