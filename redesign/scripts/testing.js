// GET NEWSFEED
	function newsFeed(data){
		
		var newsItem = ''; // holds each news item
		
		$.each(data.posts, function(key, val){ // for each posts
			if (data.posts[key].thumbnail != null) { // skip post without thumbnail photos
				newsItem += '<div class="item"><a href="'+ val.url +'" target="_blank"><img src="'+ val.thumbnail +'"><br />'+ val.title +'</a></div>';
			}
		});  // Go through each post
		
		$('#news').html(newsItem); // insert posts into div
	}
	
// RESPONSIVE VIDEO
	// Find all YouTube videos
	var $allVideos = $("iframe[src^='http://player.vimeo.com'], iframe[src^='http://www.youtube.com']"),

		// The element that is fluid width
		$fluidEl = $("body");

	// Figure out and save aspect ratio for each video
	$allVideos.each(function() {

		$(this)
			.data('aspectRatio', this.height / this.width)

		// and remove the hard coded width/height
		.removeAttr('height')
		.removeAttr('width');

	});

	// When the window is resized
	$(window).resize(function() {

		var newWidth = $fluidEl.width();

		// Resize all videos according to their own aspect ratio
		$allVideos.each(function() {

			var $el = $(this);
			$el
			.width(newWidth)
			.height(newWidth * $el.data('aspectRatio'));

	});

	// Kick off one resize to fix all videos on page load
	}).resize();
	
// INSTAGRAM FEED
	var ig_user_id = '198842006';
	var ig_client_id = 'c96501a89362428d8c1712bdbec5883c';
	
	var instagramAPI = 'https://api.instagram.com/v1/users/'+ ig_user_id +'/media/recent?client_id='+ ig_client_id ;
	
	function igLoad(next_url) {
		url = next_url;
		
		$(function(){
			$.ajax({
				type: 'GET',
				dataType: 'jsonp',
				cache: false,
				url: url,
				success: function(data) {
					next_url = data.pagination.next_url;
					count = 5;
					
					for (var i=0; i < count; i++) {
						if (typeof data.data[i] !== 'undefined') {
							$('#instagram').append('<div class="item"><a target="_blank" href="'+ data.data[i].link +'"><img src="'+ data.data[i].images.standard_resolution.url +'" /></a></div>');
						}
					}
				}
			});
		});
	}
	
// MOBILE NAVIGATION TOGGLE for INTERIOR LEFT NAV
	// hide mobile nav if screen is smaller than 640px
//	if ($(window).width() <= 1024) {
//		$('section.side-nav').hide();
//	}
	// hide or show mobile nav if screen is resized
//	$(window).resize(function(){
//		if ($(window).width() > 640) {
//			$('#site-header').show();
//		} 
//	});
	// toggle mobile nav with '.mobile-header'
//	$('.toggle-mobile').click(function(){
//		if ($('#site-header').is(':hidden')){
//			$('#site-header').slideDown();
//		} else {
//			$('#site-header').slideUp();
//		}
//	});
	
// On Page Load Success
	jQuery(document).ready(function($){
		
		// Owl.carousel.js FOR SLIDESHOWS
		
			// Prime Slide
			$('.prime-carousel').owlCarousel({
				loop:true,
				items: 1,
				nav: true,
				dots: false,
				autoplay: true,
				autoplayHoverPause: true,
				responsive: {
					0:{
						nav: false,
					},
					641: {
						nav: true,
					}
				}
			});
			
			// News feed
			$('#news').owlCarousel({
				loop:true,
				responsive:{
					0:{
						items:1,
						dots: true
					},
					641:{
						items:2,
						nav: true,
						dots: false
					},
					1025:{
						items: 3,
						nav: true,
						dots: false
					},
					1441:{
						items:4,
						nav: true,
						dots: false
					}
				} 
			});
		
		// instagram
		igLoad(instagramAPI);
	});