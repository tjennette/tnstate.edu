function igLoad(a){var i="";url=a,$(function(){$.ajax({type:"GET",dataType:"jsonp",url:url,cache:!1,success:function(t){a=t.pagination.next_url,count=10;for(var n=0;count>n;n++)"undefined"!=typeof t.data[n]&&(i+='<div class="item"><a target="_blank" href="'+t.data[n].link+'"><img src="'+t.data[n].images.thumbnail.url+'" /></a></div>')}})}),$("#instagram").html(i)}var ig_user_id="198842006",ig_client_id="c96501a89362428d8c1712bdbec5883c",instagramAPI="https://api.instagram.com/v1/users/"+ig_user_id+"/media/recent?client_id="+ig_client_id;