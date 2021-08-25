$(function(){

    let $btn = $('.js--up-btn');

    $btn.on('click', function(e){
        e.preventDefault();

        $('html, body').animate({'scrollTop': 0}, 300);

    });

    function toggleActive(){

        let scrollTop = $(window).scrollTop(),
            wHeight = $(window).height();

        if (scrollTop > wHeight*.75 && !$btn.hasClass('_active')) {
            $btn.addClass('_active');
        } else if (scrollTop < wHeight && $btn.hasClass('_active')){
            $btn.removeClass('_active');
        }
    }

    toggleActive();
    $(window).on('scroll', function(){
        toggleActive();
    });

});