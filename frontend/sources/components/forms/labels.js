$(function(){

    App.FormLabels = {

        init: function(){

            $(document).on('blur', 'input, textarea', (e)=>{ this.toggleLabel($(e.target)) });
            $(document).on('change', 'select', (e)=>{ this.toggleLabel($(e.target)) });
            $(document).on('focus', 'input, textarea', function () {
                $(this).closest('.form-item').addClass('_not-empty');
            });

            this.toggleLabel();

        },

        toggleLabel: function($el = $('input, textarea, select')) {

            $el.each(function(){

                let $input = $(this);

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

            });

        }

    };
    App.FormLabels.init();

});