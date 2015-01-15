function newsFeed(data){
	
	var newsItem = ''; // holds each news item
	
	$.each(data.posts, function(key, val){ // for each posts
		if (data.posts[key].thumbnail != null) { // skip post without thumbnail photos
			newsItem += '<div class="item"><a href="'+ val.url +'"><img src="'+ val.thumbnail +'"><br />'+ val.title +'</a></div>';
		}
	});  // Go through each post
	
	$('#news').html(newsItem); // insert posts into div
}

$(document).ready(function(){
	var newsSlide = $('#news'); // div that holds the carousel
	
	newsSlide.owlCarousel ({
		items: 5, // max number shown
		itemsDesktop: [1920, 4], // [max-width, #shown]
		itemsDesktopSmall: [1440, 3],
		itemsTablet: [1024,2],
		itemsMobile: [640,1],
		autoPlay: 7000, // change slides every 7 seconds
		stopOnHover: true,
	}); // News Feed Carousel
	
});