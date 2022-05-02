 let reasonSlider;
let typesSlider;
const reasonSelector = $('.reason-slider').get(0);
const typesSelector = $('.types-slider').get(0);

function handleResponsive() {

    // DESTROY SLIDER INSTANCES

    if ($(window).outerWidth() <= 991) {
        if (!reasonSlider && reasonSelector) {
            reasonSlider = new Swiper(".reason-slider", {
                spaceBetween: 60,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
            });
        }
    } else {
        destroySwiper(reasonSlider);
        reasonSlider = null;
    }

    if ($(window).outerWidth() <= 767) {
        if (!typesSlider && typesSelector) {
            typesSlider = new Swiper(".types-slider", {
                slidesPerView: 1.25,
                spaceBetween: 60,
                slidesOffsetBefore: 10,
                slidesOffsetAfter: 40,
                breakpoints: {
                    420: {
                        slidesPerView: 1.5,
                        spaceBetween: 60,
                        slidesOffsetBefore: 10,
                        slidesOffsetAfter: 40,
                    },
                    767: {
                        slidesPerView: 1.75,
                        spaceBetween: 60,
                        slidesOffsetBefore: 10,
                        slidesOffsetAfter: 40,
                    },
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
            });
        }
    } else {
        destroySwiper(typesSlider);
        typesSlider = null;
    }
}

let resizeId;


handleResponsive();

window.addEventListener('resize', function () {
    clearTimeout(resizeId);
    resizeId = setTimeout(handleResponsive, 500);
});


 //destroy slider

 function destroySwiper(sliderInstance) {
     if (sliderInstance instanceof Swiper && sliderInstance.initialized) {
         sliderInstance.destroy(true, true);
     }
 }
