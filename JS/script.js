$(document).ready(function() {
	$(".gallery__slider").slick({
        arrows:false,
		dots:false,
		slidesToShow:3,
		slidesToScroll:3,
		centerMode: true,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 1000,
        pauseOnHover: false,
	});
	$('.header__burger').click(function(event){
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});