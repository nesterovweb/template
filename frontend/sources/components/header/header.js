$(()=>{

    App.Header = {

        burgerMenuIsOpen: false,

        init: function(){

            this.fixOnScroll();
            this.burgerMenu();

        },

        headerSelector: '.js--header',

        fixOnScroll: function(){

            let y = $(window).scrollTop(),
                $header = $(this.headerSelector),
                triggerY = $header.innerHeight();

            function updateHead(){

                const newY = $(window).scrollTop(),
                    isUp = newY <= y,
                    isDown = newY > y;

                if (newY > triggerY && !$header.hasClass('_fix')) {
                    $header.addClass('_fix');
                } else if (newY <= triggerY && $header.hasClass('_fix')) {
                    $header.removeClass('_fix');
                }

                if (isUp) {
                    $header.addClass('_fix-show');
                } else if (isDown && $header.hasClass('_fix')) {
                    $header.removeClass('_fix-show');
                }

                y = newY;

            }

            updateHead();
            $(window).on('scroll', function(e){
                updateHead();
            });

        },

        burgerSelector: '.js--header-burger',

        burgerMenu: function(){

            const $header = $(this.headerSelector);

            $(this.burgerSelector).on('click', ()=>{
                if (!$header.hasClass('_burger-open')) {
                    $header.addClass('_burger-open');
                    App.Header.burgerMenuIsOpen = true;
                } else {
                    $header.removeClass('_burger-open');
                    App.Header.burgerMenuIsOpen = false;
                }
            });

            $(document).on('click', function(e){
                if (!$header.is(e.target) && !$header.has(e.target).length) {
                    $header.removeClass('_burger-open');
                    App.Header.burgerMenuIsOpen = false;
                }
            });

        }

    }
    App.Header.init();

});