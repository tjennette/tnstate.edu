function newsFeed(e){var t="";$.each(e.posts,function(s,i){null!=e.posts[s].thumbnail&&(t+='<div class="item"><a href="'+i.url+'"><img src="'+i.thumbnail+'"><br />'+i.title+"</a></div>")}),$("#news").html(t)}$(document).ready(function(){var e=$("#news");e.owlCarousel({items:5,itemsDesktop:[1920,4],itemsDesktopSmall:[1440,3],itemsTablet:[1024,2],itemsMobile:[640,1],autoPlay:7e3,stopOnHover:!0})});