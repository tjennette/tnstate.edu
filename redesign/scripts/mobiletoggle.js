// MOBILE NAVIGATION TOGGLE
	// hide mobile nav if screen is smaller than 640px
	if ($(window).width() <= 640) {
		$('#site-header').hide();
	}
	// hide or show mobile nav if screen is resized
	$(window).resize(function(){
		if ($(window).width() > 640) {
			$('#site-header').show();
		} 
	});
	// toggle mobile nav with '.mobile-header'
	$('.toggle-mobile').click(function(){
		if ($('#site-header').is(':hidden')){
			$('#site-header').slideDown();
		} else {
			$('#site-header').slideUp();
		}
	});