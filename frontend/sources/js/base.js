App.isMobile = function(){
    return $(window).width() <= 1024;
};
App.isTablet = function(){
    return $(window).width() >= 768 && $(window).width() <= 1024;
};
App.isPhone = function(){
    return $(window).width() < 768;
};

App.Events = {
    onAjaxUpdate: function(){

    }
}

import '../components/svg-sprite/svg-sprite';
import '../components/preloader/preloader';
import '../components/full-page/full-page';