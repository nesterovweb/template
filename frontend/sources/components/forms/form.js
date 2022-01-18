// import './labels';
// import './select';
// import './range';
// import './file';

$(function(){

    App.Forms = {

        init: function(){

            this.events();
            this.mask();

        },

        mask: function(){

            $('.js--webform [data-validation]:not(._mask-init)').each((index, item) => {

                let $this = $(item);

                let data = JSON.parse($this.attr('data-validation'));

                let mask = this.fields[data.name].mask;
                if (mask !== undefined) {
                    new IMask($this[0], this.fields[data.name].mask);
                }

                $this.addClass('_mask-init');

            });

        },

        events: function(){

            $(document).on('input change', '.js--webform [data-validation]', (e) => {

                let $this = $(e.target),
                    val = $this.val(),
                    $formItem = $this.closest('.form-item, .js--form-item');

                let data = JSON.parse($this.attr('data-validation'));

                if (data.name === 'success') val = $this.prop('checked');

                if (this.fields[data.name].require(val)) {
                    $formItem.removeClass('_error');
                }

            });

            $(document).on('submit', '.js--webform', function(e){
                e.preventDefault();
                let $form = $(this);

                let status = true;

                $('[data-validation]', $form).each(function(){
                    let $input = $(this),
                        $formItem = $input.closest('.form-item');
                    $formItem.removeClass('_error');
                    if (!App.Forms.checkinput($input)) {
                        $formItem.addClass('_error');
                        status = false;
                    }
                });

                if (status === true) {

                    App.Forms.ajaxFormSend({
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

                }

            });

        },

        fields: {

            phone: {
                mask: {
                    mask: '{+7} #00 000 00 00',
                    definitions: {
                        '#': /[012345679]/
                    }
                },
                require: function(val){
                    return (val.length === 16 && val.substr(3,1) === "9");
                }
            },

            email: {
                require: function(val){
                    return (val.length >= 3 && /^[^\s@]+@[^\s@]+$/.test(val));
                }
            },

            birthday: {
                mask: {
                    mask: Date,
                    min: new Date(1930, 0, 0),
                    max: new Date(2004, 0, 0)
                },
                require: function(val){
                    return (val.length === 10);
                }
            },

            fio: {
                mask: {
                    mask: /^\+?[а-яА-Я\s]*$/
                },
                require: function(val){
                    return (val.length >= 3 && /^\+?[а-яА-Я\s]*$/.test(val));
                }
            },

            smsCode: {
                mask: {
                    mask: '00000'
                },
                require: function(val){
                    return (/^\+?[0-9]{5}$/.test(val));
                }
            },

            passport: {
                mask: {
                    mask: '0000 000000'
                },
                require: function(val){
                    return (val.length === 11);
                }
            },

            city: {
                require: function(val){
                    return (val.length >= 3);
                }
            },

            success: {
                require: function(val){
                    return (val === true);
                }
            }

        },

        checkinput: function($input){
            let result = true,
                val = $input.val(),
                data = JSON.parse($input.attr('data-validation')),
                name = data.name;
            if (name === 'success') val = $input.prop('checked');
            if (!this.fields[name].require(val)) {
                result = false;
            }
            return result;
        },

        ajaxFormSend: function(opt){

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

        }

    }
    App.Forms.init();

});