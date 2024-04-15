$(function () {

    // 서브메뉴 슬라이드
    $('.main> li').mouseover(function () {
        $(this).children('.sub').stop().slideDown();
    });
    $('.main> li').mouseout(function () {
        $(this).children('.sub').stop().slideUp();
    });

    // 스토어 슬라이드
    var swiper = new Swiper(".store_mySwiper", {
        slidesPerView: 4,
        spaceBetween: 10,
        freeMode: true,
        loop: true
    });

    // 이벤트 슬라이드
    var swiper = new Swiper(".event_mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        loop: true,
        coverflowEffect: {
            rotate: -60,
            stretch: 0,
            depth: 500,
            modifier: 1,
            slideShadows: true,
        },
        navigation: {
            nextEl: ".event_button_left",
            prevEl: ".event_button_right",
        }
    });

    // 이벤트 버튼 누를 때
    $('.event_button_left').mousedown(function () {
        $(this).addClass('event_button_click');
    });
    $('.event_button_left').mouseup(function () {
        $(this).removeClass('event_button_click');
    });
    $('.event_button_right').mousedown(function () {
        $(this).addClass('event_button_click');
    });
    $('.event_button_right').mouseup(function () {
        $(this).removeClass('event_button_click');
    });

    // 스케줄 팝업/버튼
    $('.sch02').click(function () {
        $('.sch_popup_02').toggle();
        $(this).parents('.schedule_circle').toggleClass('schbg');
        $(this).toggleClass('sche_white');

        $('.sch_popup_03, .sch_popup_04, .sch_popup_05, .sch_popup_06, .sch_popup_07, .sch_popup_08, .sch_popup_09, .sch_popup_10, .sch_popup_11').hide();
        $('.sch03, .sch04, .sch05, .sch06, .sch07, .sch08, .sch09, .sch10, .sch11').parents('.schedule_circle').removeClass('schbg');
        $('.sch03, .sch04, .sch05, .sch06, .sch07, .sch08, .sch09, .sch10, .sch11').removeClass('sche_white');
    });
    $('.sch03').click(function () {
        $('.sch_popup_03').toggle();
        $(this).parents('.schedule_circle').toggleClass('schbg');
        $(this).toggleClass('sche_white');

        $('.sch_popup_02, .sch_popup_04, .sch_popup_05, .sch_popup_06, .sch_popup_07, .sch_popup_08, .sch_popup_09, .sch_popup_10, .sch_popup_11').hide();
        $('.sch02, .sch04, .sch05, .sch06, .sch07, .sch08, .sch09, .sch10, .sch11').parents('.schedule_circle').removeClass('schbg');
        $('.sch02, .sch04, .sch05, .sch06, .sch07, .sch08, .sch09, .sch10, .sch11').removeClass('sche_white');
    });
    $('.sch04').click(function () {
        $('.sch_popup_04').toggle();
        $(this).parents('.schedule_circle').toggleClass('schbg');
        $(this).toggleClass('sche_white');

        $('.sch_popup_02, .sch_popup_03, .sch_popup_05, .sch_popup_06, .sch_popup_07, .sch_popup_08, .sch_popup_09, .sch_popup_10, .sch_popup_11').hide();
        $('.sch02, .sch03, .sch05, .sch06, .sch07, .sch08, .sch09, .sch10, .sch11').parents('.schedule_circle').removeClass('schbg');
        $('.sch02, .sch03, .sch05, .sch06, .sch07, .sch08, .sch09, .sch10, .sch11').removeClass('sche_white');
    });
    $('.sch05').click(function () {
        $('.sch_popup_05').toggle();
        $(this).parents('.schedule_circle').toggleClass('schbg');
        $(this).toggleClass('sche_white');

        $('.sch_popup_02, .sch_popup_03, .sch_popup_04, .sch_popup_06, .sch_popup_07, .sch_popup_08, .sch_popup_09, .sch_popup_10, .sch_popup_11').hide();
        $('.sch02, .sch03, .sch04, .sch06, .sch07, .sch08, .sch09, .sch10, .sch11').parents('.schedule_circle').removeClass('schbg');
        $('.sch02, .sch03, .sch04, .sch06, .sch07, .sch08, .sch09, .sch10, .sch11').removeClass('sche_white');
    });
    $('.sch06').click(function () {
        $('.sch_popup_06').toggle();
        $(this).parents('.schedule_circle').toggleClass('schbg');
        $(this).toggleClass('sche_white');

        $('.sch_popup_02, .sch_popup_03, .sch_popup_04, .sch_popup_05, .sch_popup_07, .sch_popup_08, .sch_popup_09, .sch_popup_10, .sch_popup_11').hide();
        $('.sch02, .sch03, .sch04, .sch05, .sch07, .sch08, .sch09, .sch10, .sch11').parents('.schedule_circle').removeClass('schbg');
        $('.sch02, .sch03, .sch04, .sch05, .sch07, .sch08, .sch09, .sch10, .sch11').removeClass('sche_white');
    });
    $('.sch07').click(function () {
        $('.sch_popup_07').toggle();
        $(this).parents('.schedule_circle').toggleClass('schbg');
        $(this).toggleClass('sche_white');

        $('.sch_popup_02, .sch_popup_03, .sch_popup_04, .sch_popup_05, .sch_popup_06, .sch_popup_08, .sch_popup_09, .sch_popup_10, .sch_popup_11').hide();
        $('.sch02, .sch03, .sch04, .sch05, .sch06, .sch08, .sch09, .sch10, .sch11').parents('.schedule_circle').removeClass('schbg');
        $('.sch02, .sch03, .sch04, .sch05, .sch06, .sch08, .sch09, .sch10, .sch11').removeClass('sche_white');
    });
    $('.sch08').click(function () {
        $('.sch_popup_08').toggle();
        $(this).parents('.schedule_circle').toggleClass('schbg');
        $(this).toggleClass('sche_white');

        $('.sch_popup_02, .sch_popup_03, .sch_popup_04, .sch_popup_05, .sch_popup_06, .sch_popup_07, .sch_popup_09, .sch_popup_10, .sch_popup_11').hide();
        $('.sch02, .sch03, .sch04, .sch05, .sch06, .sch07, .sch09, .sch10, .sch11').parents('.schedule_circle').removeClass('schbg');
        $('.sch02, .sch03, .sch04, .sch05, .sch06, .sch07, .sch09, .sch10, .sch11').removeClass('sche_white');
    });
    $('.sch09').click(function () {
        $('.sch_popup_09').toggle();
        $(this).parents('.schedule_circle').toggleClass('schbg');
        $(this).toggleClass('sche_white');

        $('.sch_popup_02, .sch_popup_03, .sch_popup_04, .sch_popup_05, .sch_popup_06, .sch_popup_07, .sch_popup_08, .sch_popup_10, .sch_popup_11').hide();
        $('.sch02, .sch03, .sch04, .sch05, .sch06, .sch07, .sch08, .sch10, .sch11').parents('.schedule_circle').removeClass('schbg');
        $('.sch02, .sch03, .sch04, .sch05, .sch06, .sch07, .sch08, .sch10, .sch11').removeClass('sche_white');
    });
    $('.sch10').click(function () {
        $('.sch_popup_10').toggle();
        $(this).parents('.schedule_circle').toggleClass('schbg');
        $(this).toggleClass('sche_white');

        $('.sch_popup_02, .sch_popup_03, .sch_popup_04, .sch_popup_05, .sch_popup_06, .sch_popup_07, .sch_popup_08, .sch_popup_09, .sch_popup_11').hide();
        $('.sch02, .sch03, .sch04, .sch05, .sch06, .sch07, .sch08, .sch09, .sch11').parents('.schedule_circle').removeClass('schbg');
        $('.sch02, .sch03, .sch04, .sch05, .sch06, .sch07, .sch08, .sch09, .sch11').removeClass('sche_white');
    });
    $('.sch11').click(function () {
        $('.sch_popup_11').toggle();
        $(this).parents('.schedule_circle').toggleClass('schbg');
        $(this).toggleClass('sche_white');

        $('.sch_popup_02, .sch_popup_03, .sch_popup_04, .sch_popup_05, .sch_popup_06, .sch_popup_07, .sch_popup_08, .sch_popup_09, .sch_popup_10').hide();
        $('.sch02, .sch03, .sch04, .sch05, .sch06, .sch07, .sch08, .sch09, .sch10').parents('.schedule_circle').removeClass('schbg');
        $('.sch02, .sch03, .sch04, .sch05, .sch06, .sch07, .sch08, .sch09, .sch10').removeClass('sche_white');
    });
});