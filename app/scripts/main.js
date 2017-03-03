


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

$(document).ready(function() {
    $('#lightSlider').lightSlider({
        item: 6,
        autoWidth: false,
        slideMove: 6, // slidemove will be 1 if loop is true
        slideMargin: 0,
 
        addClass: '',
        mode: 'slide',
        useCSS: true,
        cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
        easing: 'linear', //'for jquery animation',////
 
        speed: 400, //ms'
        auto: true,
        loop: true,
        slideEndAnimation: false,
        pause: 2000,
 
        keyPress: false,
        controls: true,
        prevHtml: '<span class="custom-prev-html"><img src="images/leftArrow.png" /></span>',
        nextHtml: '<span class="custom-next-html"><img src="images/rightArrow.png" /></span>',
 
        rtl:false,
        adaptiveHeight:false,
 
        vertical:false,
        verticalHeight:500,
        vThumbWidth:100,
 
        thumbItem:0,
        pager: false,
        gallery: false,
        galleryMargin: 0,
        thumbMargin: 0,
        currentPagerPosition: 'middle',
 
        enableTouch:true,
        enableDrag:true,
        freeMove:true,
        swipeThreshold: 40,
 
        responsive : [
        	{
        		breakpoint:800,
                settings: {
                    item:4,
                    slideMove:1,
                  }
        	},
        	{
        		breakpoint:480,
                settings: {
                    item:2,
                    slideMove:1,
                  }
        	}
        ],
 
        onBeforeStart: function (el) {},
        onSliderLoad: function (el) {},
        onBeforeSlide: function (el) {},
        onAfterSlide: function (el) {},
        onBeforeNextSlide: function (el) {},
        onBeforePrevSlide: function (el) {}
    });
});



var map;
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 37.78869, lng: -122.4076},
      zoom: 13,
      styles: [{"featureType":"all","elementType":"all","stylers":[{"invert_lightness":true},{"saturation":10},{"lightness":30},{"gamma":0.5},{"hue":"#435158"}]}],
      scrollwheel:  false,
      disableDefaultUI: true



    });

    var marker = new google.maps.Marker({
      position: {lat: 37.78869, lng: -122.4076},
      map: map,
      title: 'Hatch',
    });

  }