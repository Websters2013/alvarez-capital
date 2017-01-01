"use strict";
( function(){

    $( function () {

        $.each( $( '.calculate' ), function() {

            new Calculate ( $( this ) );

        } );

    } );

    var Calculate = function( obj ) {

        //private properties
        var _self = this,
            _obj = obj,
            _calculateBtn = _obj.find('button'),
            _price = _obj.find('.calculate__value'),
            _percent = _obj.data('percent'),
            _percentFee = _obj.data('fee-percent'),
            _time = _obj.data('time'),
            _sliderRange = _obj.find('.calculate__range-slider')[0],
            _monthlyReturn = _obj.find('.calculate__monthly-return'),
            _totalBenefit = _obj.find('.calculate__total-benefit'),
            _fee = _obj.find('.calculate__fee');

        //private methods
        var _addEvents = function() {

                _sliderRange.noUiSlider.on('update', function( values, handle ) {

                    _monthlyReturn.find('span').text(' --.-- ');
                    _totalBenefit.find('span').text(' --.-- ');
                    _fee.find('span').text(' --.-- ');

                });

                _calculateBtn.on( {
                    click: function() {

                        _addLoading();

                        setTimeout( function() {

                            _calcMonthlyReturn();
                            _calcTotalBenefit();
                            _calcFee();

                            _obj.find('.calculate__loading').removeClass('visible');

                        }, 400 );

                        setTimeout( function() {

                            _obj.find('.calculate__loading').remove();

                        }, 700 );

                    }
                } );

            },
            _addLoading = function() {

                var loading = $('<div class="calculate__loading"></div>');

                _obj.append( loading );

                loading.addClass('visible');

            },
            _calcMonthlyReturn = function() {

                var monthlyReturn = ( parseInt( _price.val().split(' ')[0].replace('.', '') ) * _percent/100 ) / _time;

                if ( !isNaN(monthlyReturn) && monthlyReturn.toString().indexOf('.') != -1 ) {

                    monthlyReturn = Math.ceil( ( monthlyReturn ) * 100 ) / 100;
                    monthlyReturn = monthlyReturn.toString().replace('.', ',');

                }

                _monthlyReturn.find('span').text( _numberWithCommas( monthlyReturn ) );

            },
            _calcTotalBenefit  = function() {

                var totalBenefit = parseInt( _price.val().split(' ')[0].replace('.', '') ) * ( 1 + _percent/100 );

                if ( !isNaN(totalBenefit) && totalBenefit.toString().indexOf('.') != -1 ) {

                    totalBenefit = Math.ceil( ( totalBenefit ) * 100 ) / 100;
                    totalBenefit = totalBenefit.toString().replace('.', ',');

                }

                _totalBenefit.find('span').text( _numberWithCommas( totalBenefit ) );

            },
            _calcFee  = function() {

                var fee = parseInt( _price.val().split(' ')[0].replace('.', '') ) * _percentFee/100;

                if ( !isNaN(fee) && fee.toString().indexOf('.') != -1 ) {

                    fee = Math.ceil( ( fee ) * 100 ) / 100;
                    fee = fee.toString().replace('.', ',');

                }

                _fee.find('span').text( _numberWithCommas( fee ) );

            },
            _numberWithCommas = function ( x ) {

                var parts = x.toString().split('.');
                parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
                return parts.join('.');

            },
            _init = function() {
                _obj[ 0 ].obj = _self;
                _addEvents();
                _calcMonthlyReturn();
                _calcTotalBenefit();
                _calcFee();
            };

        _init();
    };

} )();