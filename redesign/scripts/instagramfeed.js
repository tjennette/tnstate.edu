/*	Instagram Image Carousel
 *
 *  jQuery OwlCarousel v1.3.3
 *
 *  Copyright (c) 2013 Bartosz Wojciechowski
 *  http://www.owlgraphic.com/owlcarousel/
 *
 *  Licensed under MIT
 *
 */

/*JS Lint helpers: */
/*global dragMove: false, dragEnd: false, $, jQuery, alert, window, document */
/*jslint nomen: true, continue:true */

// Variables for Instagram

var ig_user_id = '198842006';
var ig_client_id = 'c96501a89362428d8c1712bdbec5883c';

var instagramAPI = 'https://api.instagram.com/v1/users/'+ ig_user_id +'/media/recent?client_id='+ ig_client_id ;

function igLoad(next_url) {
	
	var ig_items = '';
	
	url = next_url
	
	$(function(){
		$.ajax({
			type:'GET',
			dataType:'jsonp',
			url: url,
			cache: false,
			success: function(data){
				next_url = data.pagination.next_url;
				count = 10;
				
				for (var i=0; i < count; i++) {
					if (typeof data.data[i] !== 'undefined') {
						ig_items += '<div class="item"><a target="_blank" href="'+ data.data[i].link +'"><img src="'+ data.data[i].images.thumbnail.url +'" /></a></div>';
					}
				}
			}
		});
	});
	
	$('#instagram').html(ig_items);
}



// string json = jsonp.substring(jsonp.inderOf('(')+1, jsonp.lastIndexOf(')'));