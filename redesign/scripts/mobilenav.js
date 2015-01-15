$(document).ready(function(){

	$('#site-header').hide();
	
	$('.mobile-close a').click(function(){
		$('#site-header').slideUp();
	});
	
	$('.mobile-nav').click(function(){
		if ($('#site-header').is(':hidden')) {
			$('#site-header').slideDown();
		} else {
			$('#site-header').slideUp();
		}
	});
	
	if ($(window).width() > 640) {
		$('#site-header').show();
	}
	
	$(window).resize(function(){
		if ($(window).width() > 640) {
			$('#site-header').show();
		}
	});

});