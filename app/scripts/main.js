/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById('mySidenav').style.width = '300px';
}
/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById('mySidenav').style.width = '0';
}


var $ = jQuery.noConflict();
$(window).scroll(function(){
  var scroll = $(this).scrollTop();
  $('.parallax').css({'background-position':'25px '+scroll/11+'px'});
});



$('.changeImageOne').hover(function(){
	$('#changeThisImage').attr('src','images/pinkgirl.jpg');
});

$('.changeImageTwo').hover(function(){
	$('#changeThisImage').attr('src','images/mouthgirl.jpg');
});

$('.changeImageThree').hover(function(){
	$('#changeThisImage').attr('src','images/yellowhair.jpg');
});



$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    navText: ['<img src=\'images/leftarrow.png\'>','<img src=\'images/rightarrow.png\'>'],
    dots:false,
    autoplay: true,
    autoplayTimeout:1000,
    responsive:{
    	200:{
    		items:1
    	},
        400:{
            items:2
        },
        600:{
            items:4
        },
        1000:{
            items:6
        }
    }
});



var map;
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 37.78869, lng: -122.4076},
      zoom: 13,
      styles: [{'featureType':'all','elementType':'all','stylers':[{'invert_lightness':true},{'saturation':10},{'lightness':30},{'gamma':0.5},{'hue':'#435158'}]}],
      scrollwheel:  false,
      disableDefaultUI: true



    });

    var marker = new google.maps.Marker({
      position: {lat: 37.78869, lng: -122.4076},
      map: map,
      title: 'Hatch',
    });

  }