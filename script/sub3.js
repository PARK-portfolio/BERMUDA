$(function () {
    // 서브메뉴 슬라이드
    $('.main> li').mouseover(function () {
        $(this).children('.sub').stop().slideDown();
    });
    $('.main> li').mouseout(function () {
        $(this).children('.sub').stop().slideUp();
    });

    // 시즌 슬라이드
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        spaceBetween: 0,
        freeMode: true,
        loop: true
    });

    // AOS 
    AOS.init({
        duration: 1200
    });
});