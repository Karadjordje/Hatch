


/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById('mySidenav').style.width = '350px';
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