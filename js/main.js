$(function(){
    $('.design__slider').slick({
        dots: false,
        slidesToShow: 4,
        variableWidth: true,
        prevArrow: '<img class="arrow arrow-right" src="images/arrow-right.svg" alt="arrow right img">',
        nextArrow: '<img class="arrow arrow-left" src="images/arrow-left.svg" alt="arrow left img">',
    });
});