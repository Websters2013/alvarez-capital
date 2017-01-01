"use strict";
( function(){

    $( function () {

        $.each( $( '.closed-projects__set' ), function() {

            new MoreClosedProjects ( $( this ) );

        } );

    } );

    var MoreClosedProjects = function( obj ) {

        //private properties
        var _self = this,
            _obj = obj,
            _btnMore = _obj.find( '.closed-projects__add' ),
            _btnAction = _btnMore.data( 'action' ),
            _wrapper = _obj.find( '.closed-projects__set-wrap' ),
            _request = new XMLHttpRequest();

        //private methods
        var _addEvents = function() {

                _btnMore.on( {

                    click: function() {
                        _ajaxRequest();
                        return false;
                    }

                } );

            },
            _addNewsContent = function( msg ){

                var hasItems = msg.has_items;

                $.each( msg.items, function() {

                    var newBlock = $( '<a href="'+ this.href +'" class="closed-projects__item hidden">\
                                        <div>\
                                        <h2 class="closed-projects__title">Projet <span>'+ this.projectName +'</span></h2>\
                                    <div class="closed-projects__data">\
                                        <div>\
                                        <span>'+ this.financingObjective +'</span>\
                                    Objectif financement\
                                    </div>\
                                    <div>\
                                    <span>'+ this.annualInterestRate +'</span>\
                                    Taux d`intérêt annuel\
                                    </div>\
                                    <div>\
                                    <span>'+ this.annualInterestRate2 +'</span>\
                                    Taux d`intérêt annuel\
                                    </div>\
                                    </div>\
                                    </div>\
                                    <div>\
                                    <div class="closed-projects__pic">\
                                        <img src="'+ this.src +'" width="510" height="230" alt="">\
                                        </div>\
                                        <p>'+ this.text +'</p>\
                                    </div>\
                                    </a>' );

                    _wrapper.append( newBlock );

                } );

                var newItems = _wrapper.find( '.hidden' );

                setTimeout( function() {
                    _heightAnimation( hasItems, newItems );
                }, 50 );

            },
            _heightAnimation = function( hasItems, newItems ){

                newItems.each( function( i ){
                    _showNewItems( $( this ),i );
                } );

                if ( hasItems == 0 ){
                    _removeBtnMore();
                }

            },
            _showNewItems = function( item, index ){

                setTimeout( function() {
                    item.removeClass( 'hidden' );
                }, index * 100 );

            },
            _ajaxRequest = function() {

                var newsItem = _obj.find( '.closed-projects__item' );
                _request.abort();
                _request = $.ajax( {
                    url: _btnAction,
                    data: {
                        loadedCount: newsItem.length
                    },
                    dataType: 'json',
                    timeout: 20000,
                    type: 'GET',
                    success: function ( msg ) {

                        _addNewsContent( msg );

                    },
                    error: function ( XMLHttpRequest ) {
                        if( XMLHttpRequest.statusText != 'abort' ) {
                            alert( 'Error!' );
                        }
                    }
                });

            },
            _removeBtnMore = function() {

                _btnMore.css( 'opacity', 0 );

                setTimeout( function() {

                    _btnMore.css( 'padding', 0 );

                    _btnMore.animate( {
                        height: 0
                    }, {
                        duration: 500,
                        complete: function() {
                            _btnMore.remove();
                        }
                    } );

                }, 300 );

            },
            _init = function() {

                _addEvents();
                _obj[ 0 ].obj = _self;

            };

        _init();
    };

} )();