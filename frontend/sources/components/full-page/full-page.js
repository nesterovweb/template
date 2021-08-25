$(function(){

    function fullPage() {
        $('.main').css({'minHeight': 'none'});
        setTimeout(()=>{
            $('.main').css({'minHeight': $(window).height() - $('.footer').innerHeight()});
        },10);
    }
    fullPage();
    $(window).on('resize', function(){
        fullPage();
    });

});