$(function(){

    App.ajaxPreloader = {

        $this: $('.js--ajax-preloader'),

        start: function(){

            this.$this.addClass('_active');

        },

        stop: function(){

            this.$this.removeClass('_active');

        },

    };

});