$(function(){

    App.AjaxFilter = {

        formSelector: '.js--ajax-filter-form',
        componentSelector: '.js--ajax-filter-component',
        containerSelector: '.js--ajax-filter-container',
        linksSelector: '.js--ajax-filter-link',

        init: function(){

            function getData(url, $component){

                App.ajaxPreloader.start();

                let $container = $(App.AjaxFilter.containerSelector, $component);

                $.ajax({
                    url: url,
                    type: 'GET',
                    data: {},
                    success: function(data) {
                        App.ajaxPreloader.stop();
                        try {

                            $container.html($(App.AjaxFilter.containerSelector, data).html());

                            // let newH1 = $('h1', data).html();
                            // if (newH1) $('h1').html(newH1);
                            //
                            // let newTitle = $(data).filter('title').text();
                            // if (newTitle) document.title = newTitle;
                            //
                            // let newBreadcrumbs = $('.breadcrumbs', data).html();
                            // if (newBreadcrumbs) $('.breadcrumbs').html(newBreadcrumbs);

                            App.Events.onAjaxUpdate();
                            history.replaceState({}, '', url);

                            if ($component.attr('data-scroll-to-start') != undefined) {
                                $('html, body').animate({'scrollTop': $container.offset().top-200}, 300);
                            }

                        } catch(err) {
                            console.log(err);
                        }
                    }

                });

            }

            let timeout;
            $(document).on('change input', this.formSelector+' input, '+this.formSelector+' select', function(){
                clearTimeout(timeout);
                timeout = setTimeout(()=>{
                    let $form = $(this).closest(App.AjaxFilter.formSelector),
                        $component = $(this).closest(App.AjaxFilter.componentSelector),
                        url = $form.attr('action')+'?filter=yes&'+$form.serialize();
                        getData(url, $component);
                }, 100);
            });

            $(document).on('click', App.AjaxFilter.linksSelector, function(e){
                e.preventDefault();

                let $component = $(this).closest(App.AjaxFilter.componentSelector),
                    url = $(this).attr('href'),
                    $links = $(App.AjaxFilter.linksSelector, $component);
                $links.removeClass('_active');
                $(this).addClass('_active');
                getData(url, $component);

            });

        }

    };

    App.AjaxFilter.init();

});