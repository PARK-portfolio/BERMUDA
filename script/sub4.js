$(function () {
    // 서브메뉴 슬라이드
    $('.main> li').mouseover(function () {
        $(this).children('.sub').stop().slideDown();
    });
    $('.main> li').mouseout(function () {
        $(this).children('.sub').stop().slideUp();
    });
    
    // 뉴스 슬라이드
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        spaceBetween: 0,
        freeMode: true,
        loop: true
    });

    // 뉴스 제출 후 리셋
    $('.media_search_img').click(function(){
        $('.media_search').val('');
    });
    $('form')[0].reset();
});