//MOBILE MENU
const nav = $('.header__nav');

$('.burger').click(function (e) {
    e.preventDefault();
    nav.addClass('open');
    jQuery('.backdrop').fadeIn();
});

$('.btn-close, .backdrop').click(function (e) {
    e.preventDefault();
    nav.removeClass('open');
    jQuery('.backdrop').fadeOut();
    $('.sub-menu__toggle').removeClass('sub-menu__toggle_active')
});

$('.sub-menu__toggle').click(function (e) {
    $(this).toggleClass('sub-menu__toggle_active')
});