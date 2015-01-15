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
				count = 10;
				
				for (var i=0; i < count; i++) {
					if (typeof data.data[i] !== 'undefined') {
						$('#instagram').append('<div class="item"><a target="_blank" href="'+ data.data[i].link +'"><img src="'+ data.data[i].images.thumbnail.url +'" /></a></div>');
					}
				}
			}
		});
	});
}

$(document).ready(function(){
	
	igLoad(instagramAPI);
	
});
