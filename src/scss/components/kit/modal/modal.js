//MODAL
$('.open-modal').on('click', function () {
    $('.backdrop, .modal').fadeIn(200);
});

$('.modal-close, .backdrop').on('click', function () {
    $('.backdrop, .modal').fadeOut(200);
});