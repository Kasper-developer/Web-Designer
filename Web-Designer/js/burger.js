$(document).ready(function () {
	$('.header-burger').click(function(event) { 
		$('.header-burger__item, .header-nav').toggleClass('active');
		$('body').toggleClass('lock');
	});
});