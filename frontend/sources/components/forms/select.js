$(function(){

    App.Select = {
        init: function(){

            $('.form-item select:not(._select-init)').each(function(){

                if (!$(this).closest('.js--catalog-filter').length) {

                    let options = {
                        dropdownParent: $(this).parent(),
                        dropdownPosition: 'below',
                        minimumResultsForSearch: -1
                    };

                    let search = $(this).attr('data-search');
                    if (search === 'true') options.minimumResultsForSearch = 1;

                    $(this).select2(options);

                    $(this).addClass('_select-init');

                }

            });

        }
    };
    App.Select.init();

});