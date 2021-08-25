$(function(){

    App.Accordion = {
        init: function(){

            const accordionClass = '.js--accordion',
                bodyClass = '.js--accordion-body';

            $(accordionClass+':not(._accordion-init)').each(function(){

                let $component = $(this),
                    $list = $component.closest('.js--accordion-list'),
                    $toggler = $('.js--accordion-toggler', $component),
                    $body = $('.js--accordion-body', $component);

                $toggler.on('click', function(e){
                    e.preventDefault();
                    if (!$component.hasClass('_active')) {
                        if ($list.length) {
                            $(accordionClass, $list).removeClass('_active');
                            $(bodyClass, $list).slideUp();
                        }
                        $component.addClass('_active');
                        $body.slideDown();
                    } else {
                        $component.removeClass('_active');
                        $body.slideUp();
                    }
                });

                if ($component.hasClass('_active')) {
                    $body.show();
                }

                $component.addClass('_accordion-init');

            });

        }
    };
    App.Accordion.init();

});