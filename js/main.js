var $win = $('window');
var $logo = $('.logosection');
var $about = $('.about');
var $links = $('.links');
var $aboutpar = $('.about-par');
var $contact = $('contact');

$about.waypoint(function (direction) {
	if (direction == 'down') {
		$logo.addClass('js-logo-move');
 	} else {
		$logo.removeClass('js-logo-move');
	}
}, {offset: '50%'});

$contact.waypoint(function (direction) {
	if (direction == 'down') {
		$aboutpar.addClass('js-about-par-move');
 	} else {
		$aboutpar.removeClass('js-about-par-move');
	}
}, {offset: '500%'});

$(document).ready(function() {
	$(".fancybox").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none'
	});
});

