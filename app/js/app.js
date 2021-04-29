
$(document).ready(function() {
	
	const swiper = new Swiper('.main-slider', {
		
		loop: true,
		autoplay: {
			delay: 3000,
		},
		pagination: {
		  el: '.swiper-pagination',
		},
		navigation: {
		  nextEl: '.slider__next',
		  prevEl: '.slider__prev',
		},
	});

	$( ".projects__tabs" ).tabs();

	// Video player
	const playButton =$("#video__play");
	const content = $('.video__content');

	playButton.on("click", function() {
		if (video.paused == true) {
			video.play();
			content.addClass('hidden');
		} else {
			video.pause();
			content.removeClass('hidden');
		}
	});
});