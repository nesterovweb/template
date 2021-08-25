$(function(){

    let $popup = $('.js--cookie-popup');

    if (!$popup.length) return;

    let cookie = getCookie('cookie_success'),
        $btn = $('.js--cookie-success');

    if (cookie !== 'yes') $popup.addClass('_active');

    $btn.on('click', function(e){
        e.preventDefault();
        setCookie('cookie_success', 'yes');
        $popup.removeClass('_active');
    });

});