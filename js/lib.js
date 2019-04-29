
$(document).ready(function($) {
	
	// 手机导航
	$('.menuBtn').append('<b></b><b></b><b></b>');
	$('.menuBtn').click(function(event) {
		$(this).toggleClass('open');
		var _winw = $(window).width();
		var _winh = $(window).height();
		if( $(this).hasClass('open') ){
			$('body').addClass('open');
			if( _winw<=768 ){
				$('#hd .hdr').stop().slideDown();
			}
		}else{
			$('body').removeClass('open');
			if( _winw<=768 ){
				$('#hd .hdr').stop().slideUp();
			}
		}
	});
	$('.fd-link dt').click(function(event) {
		var _winw = $(window).width();
		if( _winw<=480 ){
			$(this).toggleClass('ok').next('dd').slideToggle();
		}
	});


	
});