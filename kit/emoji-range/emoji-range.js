//    EMOJI-RANGE SLIDER
const maxDimension = 1000;
const $rangeSlider = $('.range-slider');
const $rangeInput = $('.range-slider input');
$rangeInput.attr('max', maxDimension);

const emotionLength = $('.range-slider .emotion-item').length;
const $rangeHandle = $('.range-slider .range-slider__handle');
const $rangeText = $('.range-slider .range-slider__label-text');
const $comments = $('.assess-pain .block-info__text');
const $trackPlaceholder = $('.range-slider .range-slider__track_bg');
const valHolder = $rangeSlider.find('.range-slider__value');
const $emotions = $('.emotion-item');
let prevHandleClass = $();

$rangeInput.on('input', (e) => {
    const val = e.target.value;
    const displayedVal = Math.floor(val * (emotionLength - 1) / maxDimension) || 0;
    const nextEl = $emotions.eq(displayedVal);

    if (nextEl.length) {
        $emotions.removeClass('active');
        $rangeText.removeClass('active');
        $comments.removeClass('active');

        nextEl.addClass('active');

        $rangeText.eq(displayedVal).addClass('active');
        $comments.eq(displayedVal).addClass('active');

        const handleModificator = 'range-slider__handle' + '_' + displayedVal;

        $rangeHandle.removeClass(prevHandleClass).addClass(handleModificator);
        prevHandleClass = handleModificator;
    }

    $trackPlaceholder.css({left: val / 10 + '%'});
    $rangeHandle.css({left: val / 10 + '%'});
    $(valHolder).html(displayedVal * 2);
});