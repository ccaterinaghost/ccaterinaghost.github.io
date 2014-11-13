var $win = $('window');
var $logo = $('.logosection');
var $about = $('.about');
var $links = $('.links');
var $aboutpar = $('.about-par')

$about.waypoint(function (direction) {
	if (direction == 'down') {
		$logo.addClass('js-logo-move');
 	} else {
		$logo.removeClass('js-logo-move');
	}
}, {offset: '50%'});

$about.waypoint(function (direction) {
	if (direction == 'down') {
		$aboutpar.addClass('js-aboutpar-move');
 	} else {
		$aboutpar.removeClass('js-aboutpar-move');
	}
}, {offset: '1%'});

$(document).ready(function() {
    $(".fancybox").fancybox({
        openEffect  : 'elastic',
        closeEffect : 'elastic'
    });
});