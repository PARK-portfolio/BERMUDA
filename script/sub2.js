$(function () {
    // 서브메뉴 슬라이드
    $('.main> li').mouseover(function () {
        $(this).children('.sub').stop().slideDown();
    });
    $('.main> li').mouseout(function () {
        $(this).children('.sub').stop().slideUp();
    });

    // AOS 
    AOS.init({
        duration: 1200
    });
});