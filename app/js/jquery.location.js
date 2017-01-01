"use strict";
( function(){

    $( function () {

        $.each( $(' .location__map'), function () {

            new Location( $(this) );

        } );

    } );

    var Location = function ( obj ) {

        //private properties
        var _self = this,
            _obj = obj,
            mapLat = _obj.data('map-lat'),
            mapLng = _obj.data('map-lng'),
            iconPath = _obj.data('icon-path'),
            mapZoom = _obj.data('map-zoom'),
            myLatLng = { lat: _obj.data('map-lat'), lng: _obj.data('map-lng') },
            map;

        //private methods
        var _addEvents = function () {

                google.maps.event.addDomListener( window, 'resize', function() {

                    map.setCenter( myLatLng );

                } );

            },
            _initMap = function () {

                var customMapType = new google.maps.StyledMapType( [
                    {
                        "featureType": "administrative",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#444444"
                            }
                        ]
                    },
                    {
                        "featureType": "landscape",
                        "elementType": "all",
                        "stylers": [
                            {
                                "color": "#f2f2f2"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "all",
                        "stylers": [
                            {
                                "saturation": -100
                            },
                            {
                                "lightness": 45
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "simplified"
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "transit",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "all",
                        "stylers": [
                            {
                                "color": "#9b8c62"
                            },
                            {
                                "visibility": "on"
                            },
                            {
                                "saturation": "0"
                            },
                            {
                                "lightness": "50"
                            }
                        ]
                    }
                ], {
                    name: 'Custom Style'
                } );

                var customMapTypeId = 'custom_style';

                map = new google.maps.Map( document.getElementById('contact-google-map'), {
                    zoom: mapZoom,
                    disableDefaultUI: true,
                    scrollwheel: false,
                    center: { lat: mapLat, lng: mapLng },
                    mapTypeControlOptions: {
                        mapTypeIds: [ google.maps.MapTypeId.ROADMAP, customMapTypeId ]
                    }
                } );

                var image = {
                    url: iconPath,
                    size: new google.maps.Size(40, 40),
                    scaledSize: new google.maps.Size(40, 40)
                };

                var beachMarker = new google.maps.Marker( {
                    position: { lat: mapLat, lng: mapLng },
                    map: map,
                    icon: image
                } );

                map.mapTypes.set( customMapTypeId, customMapType );
                map.setMapTypeId( customMapTypeId );

                google.maps.event.addListenerOnce(map, 'idle', function() {

                    map.setCenter( myLatLng );

                } );

            },
            _init = function () {

                google.maps.event.addDomListener( window, 'load', _initMap );
                _addEvents();

            };

        _init();
    };

} )();