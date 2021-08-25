$(function(){

    App.Mask = {
        init: function(){

            $(".js--phone-mask:not(._mask-init)").each(function(){

                var maskList = $.masksSort($.masksLoad("/frontend/libs/js/phone-codes.json"), ['#'], /[0-9]|#/, "mask");
                var maskOpts = {
                    inputmask: {
                        definitions: {
                            '#': {
                                validator: "[0-9]",
                                cardinality: 1
                            }
                        },
                        showMaskOnHover: false,
                        autoUnmask: true
                    },
                    match: /[0-9]/,
                    replace: '#',
                    list: maskList,
                    listKey: "mask"
                };
                $(this).inputmasks(maskOpts);
                $(this).addClass('_mask-init');

            });

        }
    };
    App.Mask.init();

});

$(function(){

    App.AjaxFormSend = function(opt){

        let $form = opt.form;

        App.ajaxPreloader.start();

        let formData = new FormData($form[0]);

        $.ajax({
            url: $form.attr('action'),
            type: $form.attr('method'),
            data: formData,
            processData: false,
            contentType: false,
            success: function(data) {
                App.ajaxPreloader.stop();
                try {

                    $('.form-item', $form).removeClass('_error');
                    $('.js--form-item', $form).removeClass('_error');

                    let request = JSON.parse(data);

                    switch (request.STATUS) {
                        case 'ERROR':

                            for (let key in request.ERRORS) {

                                let $input = $('[name="' + key + '"]', $form),
                                    $inputContainer = $input.closest('.form-item');
                                if (!$inputContainer.length) $inputContainer = $input.closest('.js--form-item');
                                let $errorText = $inputContainer.find('.form-item__error');
                                if (!$errorText.length) $errorText = $inputContainer.find('.js--form-item-error');

                                $errorText.text(request.ERRORS[key]);
                                $inputContainer.addClass('_error');

                            }

                            if (request.UPDATE_CAPTCHA == 'yes'){
                                $('[name=captcha_sid]', $form).val(request.CAPTCHA__DATA.captcha_sid);
                                $('[name=captcha_word]', $form).val('');
                                $(document).trigger('toggleLabel');
                                $('.js--webform-captcha-img', $form).attr('src', request.CAPTCHA__DATA.src);
                            }

                            let $firstError = $('.form-item._error', $form).first();
                            $('input', $firstError).focus();

                            if ($form.innerHeight() > $(window).height()) {
                                $('html, body').animate({'scrollTop':$firstError.offset().top-150},1);
                            }

                            break;
                        case 'OK':

                            opt.callback(request);

                            break;
                    }

                } catch(err) {
                    console.log(err);
                }

            }

        });

    };

    $(document).on('submit', '.js--webform', function(e){
        e.preventDefault();
        let $form = $(this);

        App.AjaxFormSend({
            form: $form,
            callback: function(request){

                App.Popup.openPopupSuccess({
                    title: request.SUCCESS_TITLE,
                    text: request.SUCCESS_TEXT
                });

                $('input[type=text]', $form).val('');
                $('input[type=tel]', $form).val('');
                $('input[type=email]', $form).val('');
                $('textarea', $form).val('');
                $('select', $form).val('');

                if (request.SUCCESS_URL != undefined) {
                    setTimeout(function(){
                        location.href = request.SUCCESS_URL;
                    }, 2000);
                }

                if (request.SUCCESS_RELOAD != undefined) {
                    setTimeout(function(){
                        location.reload();
                    }, 2000);
                }

                App.Seo.send('formSend', request.WEBFORM_SID);

            }
        });

    });

});

$(function(){

    App.ToggleLabels = {

        init: function(){

            function toggleLabel($input) {

                if ($input.attr('type') == 'checkbox'
                    || $input.attr('type') == 'radio'
                    || $input.hasClass('select2-search__field')
                ) return;

                let val = $input.val(),
                    $formItem = $input.closest('.form-item');

                let placeholder = $input.attr('placeholder'),
                    isPlaceholder = (placeholder != undefined && placeholder != '');

                if (val != '' || isPlaceholder)
                    $formItem.addClass('_not-empty');
                else
                    $formItem.removeClass('_not-empty');

            }

            $(document).on('blur', 'input, textarea', function () {
                toggleLabel($(this));
            });
            $(document).on('focus', 'input, textarea', function () {
                $(this).closest('.form-item').addClass('_not-empty');
            });
            $(document).on('change', 'select', function () {
                toggleLabel($(this));
            });

            $(document).on('toggleLabel', function(){
                $('input, textarea, select').each(function () {
                    toggleLabel($(this));
                });
            });
            $(document).trigger('toggleLabel');

        }

    };
    App.ToggleLabels.init();

});