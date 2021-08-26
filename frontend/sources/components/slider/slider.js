$(function(){

    App.Slider = {

        init: function(){

            $('.js--slider').each(function(){

                let $slider = $(this),
                    $container = $('.js--slider-container', $slider),
                    $slides = $('.js--slider-slides', $slider),
                    $prev = $('.js--slider-prev', $slider),
                    $next = $('.js--slider-next', $slider),
                    $pagination = $('.js--slider-pagination', $slider),
                    $scrollbar = $('.js--slider-scrollbar', $slider);

                let slidesPerView = 3;
                if ($slider.attr('data-items') != undefined) slidesPerView = $slider.attr('data-items');
                let slidesPerViewSM = slidesPerView;
                if ($slider.attr('data-items-sm') !== undefined) slidesPerViewSM = $slider.attr('data-items-sm');
                let slidesPerViewMD = slidesPerViewSM;
                if ($slider.attr('data-items-md') !== undefined) slidesPerViewMD = $slider.attr('data-items-md');
                let slidesPerViewLG = slidesPerViewMD;
                if ($slider.attr('data-items-lg') !== undefined) slidesPerViewLG = $slider.attr('data-items-lg');
                let slidesPerViewXL = slidesPerViewLG;
                if ($slider.attr('data-items-xl') !== undefined) slidesPerViewXL = $slider.attr('data-items-xl');

                let autoHeight = false;
                if ($slider.attr('data-autoHeight') == 'true') autoHeight = true;

                let loop = false;
                if ($slider.attr('data-loop') == 'true') loop = true;

                let mousewheel = false;
                if ($slider.attr('data-mousewheel') == 'true') mousewheel = true;

                let effect = 'slide';
                if ($slider.attr('data-effect') != undefined) effect = $slider.attr('data-effect');

                let autoplay = false;
                if ($slider.attr('data-autoplay') != undefined) autoplay = {delay:$slider.attr('data-autoplay'),disableOnInteraction:false,pauseOnMouseEnter:true};

                new Swiper($container[0], {
                    wrapperClass: 'slider__slides',
                    slideClass: 'slider__slide',
                    slidesPerView: slidesPerView,
                    simulateTouch: false,
                    autoHeight: autoHeight,
                    loop: loop,
                    mousewheel: mousewheel,
                    effect: effect,
                    autoplay: autoplay,
                    lazy: true,
                    navigation: {
                        nextEl: $next[0],
                        prevEl: $prev[0],
                    },
                    pagination: {
                        el: $pagination[0],
                        clickable: true,
                        modifierClass: 'slider__pagination-',
                        bulletClass: 'slider__pagination-bullet',
                        bulletActiveClass: '_active'
                    },
                    scrollbar: {
                        el: $scrollbar[0],
                        hide: false,
                        draggable: true,
                        dragClass: 'slider__scrollbar__drag'
                    },
                    breakpoints: {
                        575 : {
                            slidesPerView: slidesPerViewSM
                        },
                        767 : {
                            slidesPerView: slidesPerViewMD
                        },
                        991 : {
                            slidesPerView: slidesPerViewLG
                        },
                        1199 : {
                            slidesPerView: slidesPerViewXL
                        },
                    }
                });

            });

        }

    };
    App.Slider.init();

});