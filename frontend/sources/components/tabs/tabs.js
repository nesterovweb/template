$(()=>{

    App.Tabs = {

        init: function(){

            $('.js--tabs').each(function(){

                let $component = $(this),
                    $slider = $('.js--tabs-menu', $component),
                    $links = $('.js--tabs-link', $slider),
                    $scrollbar = $('.js--tabs-menu-scrollbar', $slider),
                    $bodies = $('.js--tabs-body', $component),
                    $activeLink = $links.filter('._active'),
                    $hashActiveLink = $links.filter('[href="'+location.hash+'"]');

                let initialSlide = 0;
                if ($activeLink.length) initialSlide = $links.index($activeLink);
                else if ($hashActiveLink.length) initialSlide = $links.index($hashActiveLink);

                const slider = new Swiper($slider[0], {
                    slidesPerView: "auto",
                    wrapperClass: 'tabs__menu__items',
                    slideClass: 'tabs__menu__item',
                    scrollbar: {
                        el: $scrollbar[0],
                        hide: false,
                        draggable: true,
                        dragClass: 'tabs__menu__scrollbar__drag'
                    },
                });

                function setActive(ID){

                    $links.removeClass('_active');
                    $links.filter('[href="#'+ID+'"]').addClass('_active');

                    $bodies.removeClass('_active');
                    let $activeBody = $bodies.filter('#'+ID);
                    if (!$activeBody.length) $activeBody = $bodies.filter('[data-id="'+ID+'"]');
                    $activeBody.addClass('_active');
                }

                setActive($links.eq(initialSlide).attr('href').substr(1));

                $links.on('click', function(e){
                    e.preventDefault();

                    if ($(this).hasClass('_active')) return;

                    let index = $links.index($(this));
                    slider.slideTo(index);

                    let ID = $(this).attr('href').substr(1);
                    setActive(ID);

                    App.Events.onAjaxUpdate();

                });

            });

        }

    };
    App.Tabs.init();

});