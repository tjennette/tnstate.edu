function newsFeed(t){var a="";$.each(t.posts,function(i,e){null!=t.posts[i].thumbnail&&(a+='<div class="item"><a href="'+e.url+'" target="_blank"><img src="'+e.thumbnail+'"><br />'+e.title+"</a></div>")}),$("#news").html(a)}function igLoad(t){url=t,$(function(){$.ajax({type:"GET",dataType:"jsonp",cache:!1,url:url,success:function(a){t=a.pagination.next_url,count=5;for(var i=0;count>i;i++)"undefined"!=typeof a.data[i]&&$("#instagram").append('<div class="item"><a target="_blank" href="'+a.data[i].link+'"><img src="'+a.data[i].images.standard_resolution.url+'" /></a></div>')}})})}var $allVideos=$("iframe[src^='http://www.youtube.com']"),$fluidEl=$("body");$allVideos.each(function(){$(this).data("aspectRatio",this.height/this.width).removeAttr("height").removeAttr("width")}),$(window).resize(function(){var t=$fluidEl.width();$allVideos.each(function(){var a=$(this);a.width(t).height(t*a.data("aspectRatio"))})}).resize();var ig_user_id="198842006",ig_client_id="c96501a89362428d8c1712bdbec5883c",instagramAPI="https://api.instagram.com/v1/users/"+ig_user_id+"/media/recent?client_id="+ig_client_id;jQuery(document).ready(function($){$(".prime-carousel").owlCarousel({loop:!0,items:1,nav:!0,dots:!1,autoplay:!0,autoplayHoverPause:!0,responsive:{0:{nav:!1},641:{nav:!0}}}),$("#news").owlCarousel({loop:!0,responsive:{0:{items:1,dots:!0},641:{items:2,nav:!0,dots:!1},1025:{items:3,nav:!0,dots:!1},1441:{items:4,nav:!0,dots:!1}}}),igLoad(instagramAPI)});