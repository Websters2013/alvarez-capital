"use strict";
( function(){

    $( function () {

        $.each( $( '.calculate__efficiency' ), function() {

            new SliderRange ( $( this ) );

        } );

    } );

    var SliderRange = function( obj ) {

        //private properties
        var _self = this,
            _obj = obj,
            _sliderRange = _obj.find('.calculate__range-slider')[0],
            _sliderValue = _obj.find('.calculate__value')[0];

        //private methods
        var _addEvents = function() {

                _sliderRange.noUiSlider.on('update', function( values, handle ) {
                    _sliderValue.value = values[handle];
                });


            },
            _initSliderRange = function() {

                noUiSlider.create( _sliderRange, {
                    start: 10000,
                    connect: [true, false],
                    step: 1000,
                    range: {
                        'min': 1000,
                        'max': 99000
                    },
                    format: wNumb({
                        decimals: 3,
                        thousand: '.',
                        postfix: ' €'
                    })
                });

            },
            _init = function() {
                _obj[ 0 ].obj = _self;
                _initSliderRange();
                _addEvents();
            };

        _init();
    };

} )();