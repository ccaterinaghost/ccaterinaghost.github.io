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
}, {offset: '80%'});


 $(document).ready(function() {
	$(".fancybox").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none'
	});
}); 






