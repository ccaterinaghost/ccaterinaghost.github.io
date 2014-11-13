var $win = $('window');
var $logo = $('.logosection');
var $about = $('.about');
var $links = $('.links');
var $portfolio = $('.portfolio')

$about.waypoint(function (direction) {
	if (direction == 'down') {
		$logo.addClass('js-logo-move');
 	} else {
		$logo.removeClass('js-logo-move');
	}
}, {offset: '50%'});