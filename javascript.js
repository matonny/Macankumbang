( function( $ ) {
  'use strict';
  $('a[href*="#"]:not([href="#"])').on( 'click', function(e) {
    e.preventDefault();
    var href = $( this ).attr( 'href' );
    $( 'html, body' ).animate( { 
      scrollTop: $( href ).offset().top + 'px'
    }, 1500, function() {
      location.hash = href;
    } ); 
  } );
  
} ( jQuery ) );
  
$(document).ready(function(){
  $('.bxslider').bxSlider();
});

function initMap() {
  var uluru = {lat:50.210694 , lng: -5.483915};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}