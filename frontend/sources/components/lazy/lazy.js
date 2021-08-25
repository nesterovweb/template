$(function(){

    App.Lazy = {
        init: function(){

            let observer = lozad('.lazy:not(.loaded)', {
                loaded: function(el) {
                    el.classList.add('loaded');
                    $(el).trigger('loaded');
                }
            });

            observer.observe();

        }
    };
    App.Lazy.init();

});