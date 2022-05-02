
//POPUP VIDEO 1

$("#video-modal-trigger").click(function (e) {
    e.preventDefault();
    $("#video-popup-wrapper").addClass("active");
    $("body").addClass("overflow-hidden");
});

$("#video-popup-wrapper, #close-video-popup").click(function (e) {
    $("#video-popup-wrapper").removeClass("active");
    $("body").removeClass("overflow-hidden");
    const video = $('#video');

    video.attr('src', '');
    const src = video.attr('src');
    video.attr('src', src);

});

// POPUP VIDEO 2

$("#video-modal-trigger").click(function (e) {
    e.preventDefault();
    $("#video-popup-wrapper").addClass("active");
    $("body").addClass("modal-open");
});

$("#close-video-popup").click(function (e) {
    $("#video-popup-wrapper").removeClass("active");
    $("body").removeClass("modal-open");
    const video = $('#video');
    video.get(0).pause();
});