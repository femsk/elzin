$(function() {

	$('.menu').click(function(){
		$(this).toggleClass('is-active');
		$(this).closest('body').find('.hidden_menu').slideToggle("400");
	});

	$('.slider').flexslider({
		animation: "slide",
		slideshow: true,
		animationSpeed: 400,
		directionNav: false,
		pauseOnHover: true,
		start: function() {
			Waypoint.refreshAll();
		}
	});

	$('.divSlider').flexslider({
		animation: "slide",
		slideshow: true,
		animationSpeed: 400,
		directionNav: false,
		pauseOnHover: true,
		controlNav: true,
		start: function() {
			Waypoint.refreshAll();
		}
	});
	
	$('.wp1').waypoint(function() {
		$('.wp1').addClass('animated fadeInLeft');
	}, {
		offset: '75%'
	});
	$('.wp2').waypoint(function() {
		$('.wp2').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.wp3').waypoint(function() {
		$('.wp3').addClass('animated fadeInDown');
	}, {
		offset: '55%'
	});
	$('.wp4').waypoint(function() {
		$('.wp4').addClass('animated fadeInDown');
	}, {
		offset: '75%'
	});
	$('.wp5').waypoint(function() {
		$('.wp5').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});

	$("a[href*='#']").mPageScroll2id();

});
