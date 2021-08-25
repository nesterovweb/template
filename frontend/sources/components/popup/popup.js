$(function(){

    App.Popup = {
        popupOptions: {
            closeExisting: true,
            baseClass: 'popup',
            btnTpl: {
                smallBtn: '<a href="javascript:void(0);" class="popup__close" data-fancybox-close></a>'
            },
            autoFocus: false,
            backFocus: false,
            trapFocus: false,
            touch: false,
            hash: false,
            loop: true,
            idleTime: 999,
            infobar: false,
            keyboard: false,
            animationDuration: 0,
            video: {
                autoStart: false
            },
            image: {
                preload: true
            },
            afterShow: function(instance, current){
                App.Events.onAjaxUpdate();
            }
        },
        init: function(){

            let popupOptions = this.popupOptions;

            $('.js--popup').each(function(){
                let options = $.extend({}, popupOptions);
                const closeExisting = $(this).attr('data-close-existing');
                if (closeExisting == 'false') {
                    options.closeExisting = false;
                }
                if ($(this).attr('data-type') == 'iframe') {
                    options.width = '100%';
                }
                $(this).fancybox(options);
            });

            let arPhotogalleryID = [];
            $('[data-photogallery]').each(function(){
                let thisID = $(this).attr('data-photogallery');
                if (!arPhotogalleryID.includes(thisID)) {
                    arPhotogalleryID.push(thisID);
                }
            });
            arPhotogalleryID.map(function(item){
                $().fancybox({
                    buttons: [
                        "thumbs",
                        "close"
                    ],
                    thumbs : {
                        autoStart : true
                    },
                    selector: '[data-photogallery='+item+']'
                });
            });

        },
        openPopupSuccess: function(opt){

            let html = '<div class="_min"><div>';
            if (opt.title != undefined) html += '<div class="h2 mb-2-rem">'+opt.title+'</div>';
            if (opt.text != undefined) html += '<div class="p">'+opt.text+'</div>';
            html += '</div></div>';

            $.fancybox.open({
                src: html,
                type: 'html',
                opts: this.popupOptions
            });

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