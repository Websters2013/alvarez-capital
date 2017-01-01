"use strict";
( function(){

    $( function () {

        $.each( $( '.current-project__status' ), function() {

            new ProjectPercent ( $( this ) );

        } );

    } );

    var ProjectPercent = function (obj) {

        //private properties
        var _self = this,
            _obj = obj,
            _checkable = false,
            _priceWrap = _obj.find('.current-project__status-price span'),
            _percentWrap = _obj.find('.current-project__budget-percent span'),
            _percentIndicator = _obj.find('.current-project__bar-indicator'),
            _duration = 1000,
            _canAnimate = true,
            _canDraw = false,
            _firstStep = true,
            _percent = parseInt( _obj.find('.current-project__budget-percent').data('percent') ),
            _price = parseInt( _obj.find('.current-project__status-price').data('price') ),
            _startTime = 0,
            _from = 0,
            _window = $(window);

        //private methods
        var _addEvents = function () {

                _window.on( {
                    scroll: function () {

                        _checkScroll();
                        _loop();

                    },

                    load: function(){

                        setTimeout( function() {

                            _checkScroll();
                            _loop();

                        },1000 );

                    }
                } );
            },
            _checkScroll = function(){
                var curScroll = _window.scrollTop(),
                    windowH = _window.height(),
                    topPos = _obj.eq(0).offset().top,
                    topInWindow = topPos - curScroll,
                    visiblePercent = 1-(topInWindow/windowH);

                if( visiblePercent > .3 ){

                    _canDraw = true;

                }
            },
            _init = function () {
                _obj[0].percentage = _self;
                _addEvents();
                _percentWrap.text(_from);

            },
            _loop = function (){

                if( _canAnimate && _canDraw ) {

                    _render();
                    _canAnimate = false;
                }

            },
            _changePercent = function( resultVal ) {

                var range = _percent,
                    current = 0,
                    increment = _percent > 0? 1 : -1,
                    stepTime = Math.abs(Math.floor(_duration / range)),
                    timer = setInterval(function() {

                        current += increment;

                        resultVal = current+'';

                        _percentWrap.text(current);

                        _percentIndicator.css( {
                            width: current + '%'
                        } );

                        if (current == range) {

                            clearInterval(timer);

                        }

                }, stepTime);

            },
            factorial = function (n) {
                return (n != 1) ? n * factorial(n - 1) : 1;
            },
            _changePrice = function( resultVal ) {

                var range = _price,
                    current = 0,
                    increment = range > 0? 1 : -1,
                    stepTime = Math.abs(Math.floor(_duration / _percent)),
                    koeff = 10;


                for( var i = 2; i <= range.toString().length-2; i++ ) {

                    koeff = koeff * 10;

                }

                var quotient = Math.floor(range / koeff),
                    remainder = Math.floor(range % koeff)/koeff;

                range = quotient;
                increment = range > 0? 1 : -1;


                var timer = setInterval(function() {

                        current += increment;

                        resultVal = current+'';

                        _priceWrap.text(_numberWithCommas(( current + remainder )*koeff));

                        if (current == range) {

                            clearInterval(timer);

                        }

                    }, stepTime);

            },
            _numberWithCommas = function ( x ) {

                var parts = x.toString().split('.');
                parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
                return parts.join('.');

            },
            _render = function( time ){

                var now = time - _startTime,
                    progress = now/_duration,
                    result = 0,
                    resultVal = null;

                if( progress > 1 ){
                    progress = 1;
                    _firstStep = true;
                    _canDraw = false;
                }

                _changePercent( resultVal );
                _changePrice( resultVal );

                _canAnimate = false;
                _canDraw = false;
            };

        //public properties

        //public methods

        _init();
    };

} )();
