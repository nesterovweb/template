$(function(){

    App.Popup = {
        popupOptions: {
            closeExisting: true,
            autoFocus: false,
            trapFocus: false,
            placeFocusBack: false,
            dragToClose: false,
            l10n: {
                CLOSE: "Закрыть",
            },
            on: {
                done: function(fancybox, slide){
                    App.Events.onAjaxUpdate();
                }
            }
        },
        init: function(){

            Fancybox.bind('.js--popup', this.popupOptions);

            $(document).on('click', '.fancybox__content', function(e){
                let $els = $('input, textarea', $(this));
                if (!$els.is(e.target) && !$els.has(e.target).length) {
                    $els.trigger('blur');
                }
            });

        },
        openPopupSuccess: function(opt){

            let html = '<div class="success-popup"><div>';
            if (opt.title != undefined) html += '<div class="h3 mb-0_5-rem">'+opt.title+'</div>';
            if (opt.text != undefined) html += '<div class="">'+opt.text+'</div>';
            html += '</div></div>';

            Fancybox.close();

            new Fancybox([
                {
                    src: html,
                    type: "html"
                }
            ], this.popupOptions);

        },
        openPopup: function(hash){

            $.fancybox.open({
                src: hash,
                opts: this.popupOptions
            });

        },
        openPopupHtml: function(html){

            $.fancybox.open({
                src: '<div>'+html+'</div>',
                type: 'html',
                opts: this.popupOptions
            });

        }
    };
    App.Popup.init();

});