//ACCORDION
$('#accordion .panel__heading').on('click', function () {
    if ($(this).hasClass('open')) {
        $(this).removeClass('open');
        $(this)
            .siblings('.panel-collapse')
            .slideUp(500);
        $('#accordion .panel__heading .open-panel')
            .removeClass('open-panel:before')
            .addClass('open-panel')
    } else {
        $('#accordion .panel__heading .open-panel')
            .removeClass('open-panel:before')
            .addClass('open-panel');
        $(this)
            .find('open-panel')
            .removeClass('open-panel')
            .addClass('open-panel:before');
        $('#accordion .panel__heading').removeClass('open');
        $(this).addClass('open');
        $('.panel-collapse').slideUp(500);
        $(this)
            .siblings('.panel-collapse')
            .slideDown(500)
    }
});