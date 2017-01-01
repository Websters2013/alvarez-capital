"use strict";
( function(){

    $( function () {

        $.each( $( '.projects-gallery' ), function() {

            new ProjectsGallery ( $( this ) );

        } );

    } );

    var ProjectsGallery = function( obj ) {

        //private properties
        var _self = this,
            _obj = obj,
            _swiper;

        //private methods
        var _addEvents = function() {



            },
            _initSwiper = function() {

                _swiper = new Swiper( _obj.find('.swiper-container'), {
                    nextButton: _obj.find('.swiper-button-next'),
                    prevButton: _obj.find('.swiper-button-prev'),
                    spaceBetween: 30,
                    slidesPerView: 'auto',
                    loop: true,
                    autoplay: 5000,
                    speed: 600,
                    autoplayDisableOnInteraction: false,
                    breakpoints: {
                        1023: {
                            slidesPerView: 1
                        }
                    }
                });

            },
            _init = function() {
                _obj[ 0 ].obj = _self;
                _addEvents();
                _initSwiper();
            };

        _init();
    };

} )();