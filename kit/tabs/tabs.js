//    Tabs
const tabLink = $('.tabs__nav-link');
tabLink.on('click', function (e) {
    $('.tabs__nav-link').removeClass('active');
    $(this).addClass('active');
    $($(this).attr('href')).addClass('active');
});

const tabContentItem = $('.tabs__content-item');
tabLink.click(function (e) {
    e.preventDefault();
    tabLink.removeClass('active');
    tabContentItem.removeClass('active');
    $(e.target).addClass('active');
    $($(e.currentTarget).attr('href')).addClass('active');
});