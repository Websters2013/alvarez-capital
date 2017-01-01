"use strict";
( function(){

    var globalScrollFlag = true;

    $( function () {

        $.each( $( '.work-process' ), function() {

            new Questions ( $( this ) );

        } );

    } );

    var Questions = function( obj ) {

        //private properties
        var _self = this,
            _obj = obj,
            _dom =  $( 'html, body'),
            _header = $('.site__header'),
            _questions = _obj.find('.work-process__questions a'),
            _answers = _obj.find('.work-process__answer');

        //private methods
        var _addEvents = function() {

                _questions.on( {
                    click: function() {

                        var curItem = $(this),
                            curParent = curItem.parent(),
                            curParentIndex = curParent.index();

                        _dom.stop( true, false );
                        _dom.animate( {
                            scrollTop: _answers.eq(curParentIndex).offset().top - 20

                        }, {
                            duration: 500,
                            progress: function () {
                                globalScrollFlag = false;
                                _header.addClass( 'site__header_hidden' );
                            },
                            complete: function () {

                                setTimeout( function() {
                                    globalScrollFlag = false;
                                }, 200 );

                                setTimeout( function() {
                                    globalScrollFlag = true
                                }, 500 );

                            }
                        });

                        return false;

                    }
                } );

            },
            _init = function() {
                _obj[ 0 ].obj = _self;
                _addEvents();
            };

        _init();
    };

} )();