$(function(){

    App.AjaxPagen = {

        containerSelector: '.js--ajax-pagen-container',
        itemSelector: '.js--ajax-pagen-item',
        showMoreSelector: '.js--ajax-pagen-show-more',
        listSelector: '.js--ajax-pagen-list',

        init: function(){
            
            $(document).on('click', this.itemSelector, function(e){
                e.preventDefault();
                
                let $container = $(this).closest(App.AjaxPagen.containerSelector),
                    url = $(this).attr('href');

                App.ajaxPreloader.start();

                $.ajax({
                    url: url,
                    type: 'GET',
                    data: {},
                    success: function(data) {
                        App.ajaxPreloader.stop();
                        try {

                            $container.html($(App.AjaxPagen.containerSelector, data).html());

                            history.replaceState({}, '', url);

                            $('html, body').animate({'scrollTop': $container.offset().top-150}, 300);

                            App.Events.onAjaxUpdate();

                        } catch(err) {
                            console.log(err);
                        }
                    }

                });
                
            });

            $(document).on('click', this.showMoreSelector, function(e){
                e.preventDefault();

                let $list = $(this).closest(App.AjaxPagen.listSelector),
                    url = $(this).attr('href');

                App.ajaxPreloader.start();

                $.ajax({
                    url: url,
                    type: 'GET',
                    data: {},
                    success: function(data) {
                        App.ajaxPreloader.stop();
                        try {

                            $('.pagen', $list).remove();
                            $list.append($(App.AjaxPagen.listSelector, data).html());

                            history.replaceState({}, '', url);

                            App.Events.onAjaxUpdate();

                        } catch(err) {
                            console.log(err);
                        }
                    }

                });

            });

        }

    };

    App.AjaxPagen.init();

});