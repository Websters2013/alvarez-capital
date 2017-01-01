"use strict";
( function(){

    $( function () {

        $.each( $( '.single-gallery__container' ), function() {

            new SingleGallery ( $( this ) );

        } );

    } );

    var SingleGallery = function( obj ) {

        //private properties
        var _self = this,
            _obj = obj,
            _swiper,
            _swiperPopup,
            _flagInitSwiper = false,
            _popupGallery = $('.gallery-popup');

        //private methods
        var _addEvents = function() {

                _obj.find('.swiper-wrapper').on( {
                    click: function() {

                        if( _flagInitSwiper ) {

                            _destroySwiperPopup();

                        }

                        setTimeout( function() {

                            _initSwiperPopup();

                        }, 300 );


                    }
                } );

            },
            _initSwiper = function() {

                _swiper = new Swiper( _obj, {
                    pagination: _obj.find('.swiper-pagination'),
                    paginationClickable: true,
                    speed: 600,
                    autoplay: 4000,
                    loop: true,
                    autoplayDisableOnInteraction: false,
                    nextButton: _obj.find('.swiper-button-next'),
                    prevButton: _obj.find('.swiper-button-prev')
                } );

            },
            _initSwiperPopup = function() {

                var actIndex = _obj.find('.swiper-slide-active').data("swiper-slide-index");

                _swiperPopup = new Swiper( _popupGallery.find('.swiper-container'), {
                    pagination:  _popupGallery.find('.swiper-container').find('.swiper-pagination'),
                    paginationClickable: true,
                    speed: 600,
                    loop: true,
                    nextButton: _popupGallery.find('.swiper-button-next'),
                    prevButton: _popupGallery.find('.swiper-button-prev')
                } );

                _swiperPopup.slideTo( _popupGallery.find('.swiper-container').find('.swiper-slide').filter('[data-swiper-slide-index='+ actIndex +']').index(), 0);

                _flagInitSwiper = true;

            },
            _destroySwiperPopup = function() {

                _swiperPopup.destroy();

            },
            _findSlides = function() {

                var slides = _obj.find('.swiper-wrapper').html();

                _popupGallery.find('.swiper-wrapper').html(slides);


            },
            _init = function() {
                _obj[ 0 ].obj = _self;
                _addEvents();
                _findSlides();
                _initSwiper();
            };

        _init();
    };

} )();