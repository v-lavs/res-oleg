/*
* to include js file write: `//= include ./path-to-file`
* */

//= include ../../node_modules/jquery/dist/jquery.js
//= include ../lib/swiper/swiper-bundle.min.js
//= include ../lib/waypoints/index.js

// CUSTOM SCRIPTS

function destroySwiper(sliderInstance) {
    if (sliderInstance instanceof Swiper && sliderInstance.initialized) {
        sliderInstance.destroy(true, true);
        console.log('destroy')
    }
}

$(document).ready(function () {
    $('.banner').mousemove(function () {
        const overlay = $('.banner .overlay');
        if (!overlay.hasClass('active')) {
            overlay.addClass('active');
        }
    });

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
    });

    //SLIDER

    if ($('.reasons__slider').get(0)) {
        const reasonsSlider = new Swiper('.reasons__slider', {
            spaceBetween: 30,
            speed: 2000,
            // allowTouchMove: false,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-slide .header .swiper-button-next",
                prevEl: ".swiper-slide .header .swiper-button-prev",
            },
        });
    }

// SLIDER RESPONSIVE
    let productList;

    const productSelector = $('.product-list').get(0);

    function handleResponsive() {

        // DESTROY SLIDER INSTANCES

        if ($(window).outerWidth() <= 1180) {
            if (!productList && productSelector) {
                productList = new Swiper(".product-list", {
                    spaceBetween: 30,
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: true,
                    },
                });
            }
        } else {
            destroySwiper(productList);
            productList = null;
        }
    }

    let resizeId;

    handleResponsive();

    window.addEventListener('resize', function () {
        clearTimeout(resizeId);
        resizeId = setTimeout(handleResponsive, 500);
        initTabsSlider();
    });

    //ACTIONS SLIDER
    let titles = document.querySelectorAll('.actions .wrap-slider .swiper-slide');
    let title = [];
    titles.forEach(function (element) {
        title.push(element.dataset.title);
    });

    if ($('.actions__slider').get(0)) {

        const actionsSlider = new Swiper(".actions__slider", {
            spaceBetween: 130,
            speed: 3000,
            slidesPerView: 1.20,
            slidesOffsetAfter: 250,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">' + title[index] + '</span>';
                },
            },

            navigation: {
                nextEl: ".wrap-slider .swiper-button-next",
                prevEl: ".wrap-slider .swiper-button-prev",
            },
        });
    }


// VIDEO PLAY

    let promotionVideo = $('#promotion-video').get(0);

    if (promotionVideo) {
        let playBtn = $('#playButton');

        playBtn.click(function () {
            promotionVideo.play();
        });

        promotionVideo.addEventListener('play', function () {
            playBtn.hide();
            promotionVideo.controls = true
        });

        promotionVideo.addEventListener('pause', function () {
            playBtn.show();
            promotionVideo.controls = false
        });
    }


    // HOVER BLOCK
    if (document.getElementById('diseasesList')) {
        const $diseasesItems = $('#diseasesList .diseases__item');

        const sliderDiseases = new Swiper('#sliderDiseases', {
            slidesPerView: 1,
            loop: true,
            autoplay: true,
            effect: 'fade',
            pagination: {
                el: '.swiper-pagination', clickable: true,
            },
            breakpoints: {
                992: {
                    loop: false,
                    autoplay: false,
                    allowTouchMove: false,
                }
            }
        });

        $diseasesItems.hover(function () {
            $diseasesItems.removeClass('active');
            $(this).addClass('active');
            const index = $(this).index();
            sliderDiseases.slideTo(index)
        });

    }


//    ANIMATION

    setTimeout(function () {
        const sectionWaypoints = $('.anim-page').waypoint({
            handler: function () {
                $(this.element).addClass('active-anim');
            },
            offset: '80%'
        });
    }, 300);

    //PARALLAX

    var scene = document.getElementById('scene');

    if (scene) {
        var parallaxInstance = new Parallax(scene);
    }

    var scene2 = document.getElementById('scene2');

    if (scene2) {
        var parallaxInstance = new Parallax(scene2);
    }

//    TABS
    const tabContentItem = $('.tabs__content-item');

    $('.tabs__nav-link').on('click', function (e) {
        e.preventDefault();

        $('.tabs__nav-link').removeClass('active');
        tabContentItem.removeClass('active');

        $(this).addClass('active');

        $($(this).attr('href')).addClass('active');
    });

    function initTabsSlider() {
        let tabsSlider;

        function setActive() {
            $(this.slides).removeClass('active');
            tabContentItem.removeClass('active');

            const $currSlide = $(this.slides[this.activeIndex]);
            $currSlide.addClass('active');
            $($currSlide.attr('href')).addClass('active')
        }

        if ($('.tabs-slider').length) {
            if ($(window).width() <= 991) {
                tabsSlider = new Swiper('.tabs-slider', {
                    spaceBetween: 30,
                    slidesPerView: 'auto',
                    initialSlide: 1,
                    on: {
                        init: setActive
                    }
                });

                tabsSlider.on('slideChange', setActive);
            } else {
                destroySwiper(tabsSlider);
            }
        }
    }

    initTabsSlider();

    //ACCORDION

    $('.accordion .panel__heading').on('click', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this)
                .siblings('.panel-collapse')
                .slideUp(500);
            $('.accordion .panel__heading .open-panel')
                .removeClass('open-panel:before')
                .addClass('open-panel')
        } else {
            $('.accordion .panel__heading .open-panel')
                .removeClass('open-panel:before')
                .addClass('open-panel');
            $(this)
                .find('open-panel')
                .removeClass('open-panel')
                .addClass('open-panel:before');
            $('.accordion .panel__heading').removeClass('open');
            $(this).addClass('open');
            $('.panel-collapse').slideUp(500);
            $(this)
                .siblings('.panel-collapse')
                .slideDown(500)
        }
    });


    //---------------------------------------------------------


    //
    //     animateDiv('.diseases__img');
    //     animateDiv('.diseases__img_1');
    //     animateDiv('.diseases__img_2');
    //     animateDiv('.diseases__img_3');
    //
    //
    // function makeNewPosition(){
    //
    //     // Get viewport dimensions (remove the dimension of the div)
    //     let  $diseasesThumb = $('.diseases__thumb')
    //     let h = $diseasesThumb.height() - 150;
    //     let w = $diseasesThumb.width() - 150;
    //
    //     let nh = Math.floor(Math.random() * h);
    //     let nw = Math.floor(Math.random() * w);
    //
    //     return [nh,nw];
    //
    // }
    //
    // function animateDiv(myclass){
    //     var newq = makeNewPosition();
    //     $(myclass).animate({ top: newq[0], left: newq[1] },  1000,   function(){
    //         animateDiv(myclass);
    //     });
    //
    // };
    //
    // window.requestAnimationFrame(animateDiv);

    $(window).on('scroll', function () {
        if ((window.innerHeight + $(window).scrollTop() + 400) >= $(document).outerHeight()) {
            $('.disclaimer').addClass('text-white');
        } else {
            if ($('.disclaimer').hasClass('text-white')) {
                $('.disclaimer').removeClass('text-white');
            }
        }
    });
});

