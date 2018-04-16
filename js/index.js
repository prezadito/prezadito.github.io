$(document).ready(function() {
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: false,
        duration: 150,
        // noWrap: true
    });
});

$('.right').click(function() {
    $('.carousel').carousel('next');
});

$('.left').click(function() {
    $('.carousel').carousel('prev');
});