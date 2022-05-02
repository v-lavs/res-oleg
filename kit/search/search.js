//search form
$('.search-btn').on('click', function () {
    $('.search-bar').toggleClass('is-open');
});

//close search form
$(document).mouseup(function H(e) {
    let block = $('.search-form, .search-bar, .search-btn');
    if (!block.is(e.target)
        && block.has(e.target).length === 0) {
        block.removeClass('active');
    }
});