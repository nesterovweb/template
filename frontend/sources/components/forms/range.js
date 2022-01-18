$(()=>{

    App.Range = {

        init: function(){

            function formatNumber(n) {
                return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, " ")
            }

            $('.js--range').each(function(){

                let $component = $(this),
                    $slider = $('.js--range-slider', $component),
                    $input = $('.js--range-input', $component),
                    $inputLeft = $('.js--range-input-left', $component);

                let min = parseInt($component.attr('data-min')),
                    max = parseInt($component.attr('data-max')),
                    start = parseInt($component.attr('data-start')),
                    startConnect = parseInt($component.attr('data-start-connect')),
                    step = parseInt($component.attr('data-step')),
                    connect = 'lower';

                if ($inputLeft.length) {
                    start = [start, startConnect];
                    connect = true;
                }

                let slider = noUiSlider.create($slider[0], {
                    start: start,
                    range: {
                        min: min,
                        max: max
                    },
                    step: step,
                    connect: connect,
                });

                slider.on('update', function (values) {
                    let val = Math.floor(values[0]);
                    let valLeft = false;
                    if ($inputLeft.length) {
                        val = Math.floor(values[1]);
                        valLeft = Math.floor((values[0]));
                        valLeft = String(valLeft);
                        valLeft = formatNumber(valLeft);
                        let prefixLeft = $inputLeft.attr('data-prefix');
                        if (prefixLeft != undefined) {
                            valLeft = valLeft + prefixLeft;
                        }
                    }
                    val = String(val);
                    val = formatNumber(val);
                    let prefix = $input.attr('data-prefix');
                    if (prefix != undefined) {
                        val = val + prefix;
                    }
                    $input.val( val );
                    if (valLeft) {
                        $inputLeft.val( valLeft );
                    }
                    $slider.trigger('changeRange', values);
                });

                function sliderSet(){
                    let val = parseInt($input.val().replace(/\D+/g,""));
                    if ($inputLeft.length) {
                        let valLeft = parseInt($inputLeft.val().replace(/\D+/g,""));
                        slider.set([valLeft, val]);
                    } else {
                        slider.set(val);
                    }
                }
                $input.on('change', function(e){
                    sliderSet();
                });
                $inputLeft.on('change', function(e){
                    sliderSet();
                });

                $('input', $component).on('focus', function(){
                    this.select();
                });

            });

        }

    };
    App.Range.init();

});