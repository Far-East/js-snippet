//  Подсветка активной ссылки jQery
jQuery(document).ready(function($) { 

	$('.main-nav li a').each(function () {
	        var location = window.location.href;
	        var link = this.href; 
	        if(location == link) {
	            $(this).addClass('active-item');
	        }
	});

});
