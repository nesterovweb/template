$(function(){

    App.InputFile = {
        init: function(){

            let componentClass = '.js--input-file',
                addClass = '.js--input-file-add',
                textClass = '.js--input-file-text';

            $(document).on('click', addClass, function(e){
                e.preventDefault();
                let $component = $(this).closest('.js--input-file');
                $('input[type=file]', $component).click();
            });

            $(document).on('change', componentClass+' input[type=file]', function(){
                let arVal = $(this).val().split("\\"),
                    text = arVal[arVal.length-1];
                let $component = $(this).closest(componentClass),
                    $text = $(textClass, $component);
                if (text != '') {
                    $text.text(text);
                    $component.addClass('_filled');
                } else {
                    $component.removeClass('_filled');
                }
            });

            $(document).on('click', '.js--input-file-delete', function(e){
                e.preventDefault();
                let $component = $(this).closest(componentClass),
                    $input = $('input[type=file]', $component),
                    $text = $(textClass, $component);
                $input.val('');
                $text.text('');
                $component.removeClass('_filled');
            });

        }
    };
    App.InputFile.init();

});