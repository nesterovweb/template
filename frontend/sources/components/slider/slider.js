$(function(){

    App.Slider2 = {

        init: function(){

            $('.js--slider-2-container').each(function(){

                let $container = $(this),
                    $slider = $('.js--slider-2', $container),
                    $prev = $('.js--slider-2-prev', $container),
                    $next = $('.js--slider-2-next', $container),
                    $pagination = $('.js--slider-2-pagination', $container);

                let slidesPerView = 1;
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

                new Swiper($slider[0], {
                    wrapperClass: 'slider-2__slides',
                    slideClass: 'slider-2__slide',
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
                        modifierClass: 'slider-2__pagination-',
                        bulletClass: 'slider-2__pagination-bullet',
                        bulletActiveClass: '_active'
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
    App.Slider2.init();

});