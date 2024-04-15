$(function () {
    // 서브메뉴 슬라이드
    $('.main> li').mouseover(function () {
        $(this).children('.sub').stop().slideDown();
    });
    $('.main> li').mouseout(function () {
        $(this).children('.sub').stop().slideUp();
    });

    // 스쿼드 탭메뉴
    $('.tabcontent > div').hide();
    $('.squad_tabnav a').click(function () {
        $('.squad_tabcontent > div').hide().filter(this.hash).fadeIn();
        $('.squad_tabnav a').removeClass('active');
        $('.squad_tabnav a').children('.squad_menu_hover').removeClass('squad_menu_hover_click');
        $('.tabnav a').children('.squad_menu').removeClass('squad_menu_click');
        $(this).addClass('active');
        $(this).addClass('.tabnav li a.active');
        $(this).children('.squad_menu_hover').addClass('squad_menu_hover_click');
        $(this).children('.squad_menu').addClass('squad_menu_click');
        return false;
    }).filter(':eq(0)').click();

    // 시설 탭메뉴
    $('.facility_tabcontent > div').hide();
    $('.facility_tabnav a').click(function () {
        $('.facility_tabcontent > div').hide().filter(this.hash).fadeIn();
        $('.facility_tabnav a').removeClass('active');
        $(this).addClass('active');
        return false;
    }).filter(':eq(0)').click();

    // AOS
    AOS.init({
        duration: 1500
    });
});
function handleClick(event) {
    nonClick.forEach((e) => {
        e.classList.remove("click");
    });
    event.target.classList.add("click");
}