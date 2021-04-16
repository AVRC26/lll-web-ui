/* ===================================================================
 * Philosophy - Main JS
 *
 * ------------------------------------------------------------------- */

(function ($) {

    "use strict";

    var cfg = {
            scrollDuration: 800, // smoothscroll duration
        },

        $WIN = $(window);

    // Add the User Agent to the <html>
    // will be used for IE10 detection (Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0))
    var doc = document.documentElement;
    doc.setAttribute('data-useragent', navigator.userAgent);

    // svg fallback
    // if (!Modernizr.svg) {
    //     $(".header__logo img").attr("src", "media/images/logo.png");
    // }


    /* Preloader
     * ----------------------------------------------------- */
    var clPreloader = function () {

        $("html").addClass('cl-preload');

        $WIN.on('load', function () {

            //force page scroll position to top at page refresh
            // $('html, body').animate({ scrollTop: 0 }, 'normal');

            // will first fade out the loading animation 
            $("#loader").fadeOut("slow", function () {
                // will fade out the whole DIV that covers the website.
                $("#preloader").delay(300).fadeOut("slow");
            });

            // for hero content animations 
            $("html").removeClass('cl-preload');
            $("html").addClass('cl-loaded');

        });
    };


    /* mediaelement
     * ------------------------------------------------------ */
    var clMediaElement = function () {

        $('audio').mediaelementplayer({
            pluginPath: 'https://cdnjs.com/libraries/mediaelement/',
            shimScriptAccess: 'always'
        });

    };


    /* FitVids
     ------------------------------------------------------ */
    var clFitVids = function () {
        $(".video-container").fitVids();
    };



    /* pretty print
     * -------------------------------------------------- */
    var clPrettyPrint = function () {
        $('pre').addClass('prettyprint');
        $(document).ready(function () {
            prettyPrint();
        });
    };



    /* search
     * ------------------------------------------------------ */
    var clSearch = function () {

        var searchWrap = $('.header__search'),
            searchField = searchWrap.find('.search-field'),
            closeSearch = searchWrap.find('.header__overlay-close'),
            searchTrigger = $('.header__search-trigger'),
            siteBody = $('body');


        searchTrigger.on('click', function (e) {

            e.preventDefault();
            e.stopPropagation();

            var $this = $(this);

            siteBody.addClass('search-is-visible');
            setTimeout(function () {
                searchWrap.find('.search-field').focus();
            }, 100);

        });

        closeSearch.on('click', function (e) {

            var $this = $(this);

            e.stopPropagation();

            if (siteBody.hasClass('search-is-visible')) {
                siteBody.removeClass('search-is-visible');
                setTimeout(function () {
                    searchWrap.find('.search-field').blur();
                }, 100);
            }
        });

        searchWrap.on('click', function (e) {
            if (!$(e.target).is('.search-field')) {
                closeSearch.trigger('click');
            }
        });

        searchField.on('click', function (e) {
            e.stopPropagation();
        });

        searchField.attr({
            placeholder: 'Type Keywords',
            autocomplete: 'off'
        });

    };


    /* Mobile Menu
     * ---------------------------------------------------- */
    var clMobileMenu = function () {

        var navWrap = $('.header__nav-wrap'),
            closeNavWrap = navWrap.find('.header__overlay-close'),
            menuToggle = $('.header__toggle-menu'),
            siteBody = $('body');

        menuToggle.on('click', function (e) {
            var $this = $(this);

            e.preventDefault();
            e.stopPropagation();
            siteBody.addClass('nav-wrap-is-visible');
        });

        closeNavWrap.on('click', function (e) {

            var $this = $(this);

            e.preventDefault();
            e.stopPropagation();

            if (siteBody.hasClass('nav-wrap-is-visible')) {
                siteBody.removeClass('nav-wrap-is-visible');
            }
        });

        // open (or close) submenu items in mobile view menu. 
        // close all the other open submenu items.
        $('.header__nav .has-children').children('a').on('click', function (e) {
            if ($(window).width() < 800) {
                e.preventDefault();
            }

            if ($(".close-mobile-menu").is(":visible") == true) {

                $(this).toggleClass('sub-menu-is-open')
                    .next('ul')
                    .slideToggle(200)
                    .end()
                    .parent('.has-children')
                    .siblings('.has-children')
                    .children('a')
                    .removeClass('sub-menu-is-open')
                    .next('ul')
                    .slideUp(200);

            }
        });

    };

    // JS to highlight activeTab
    var clHighlightActive = function () {

        if (window.location.pathname == '/') {
            $('.header__nav .home').addClass('current');
        } else if (window.location.pathname.indexOf("/about/") != -1) {
            $('.header__nav .about').addClass('current');
        } else if (window.location.pathname.indexOf("/contact/") != -1) {
            $('.header__nav .contact').addClass('current');
        } else if (window.location.pathname.indexOf("/writings/") != -1) {
            $('.header__nav .writings').addClass('current');
        } else if (window.location.pathname.indexOf("/studio/") != -1) {
            $('.header__nav .studio').addClass('current');
        } else if (window.location.pathname.indexOf("/feed/") != -1) {
            $('.header__nav .feed').addClass('current');
        } else if (window.location.pathname.indexOf("/social/") != -1) {
            $('.header__nav .social').addClass('current');
        }
    }

    /* Masonry
     * ---------------------------------------------------- */
    var clMasonryFolio = function () {

        var containerBricks = $('.masonry');

        // Initialize Masonary
        containerBricks.masonry({
            // options
            itemSelector: '.masonry__brick',
        })

        containerBricks.imagesLoaded(function () {
            containerBricks.masonry({
                itemSelector: '.masonry__brick',
                percentPosition: true,
                resize: true
            });
        });


        // layout Masonry after each image loads
        containerBricks.imagesLoaded().progress(function () {
            containerBricks.masonry('layout');
        });
    };

    /* initialize LightGallery
     * ------------------------------------------------------ */
    var clLightGallery = function () {
        $(document).ready(function () {
            $('#lightgallery').lightGallery({
                hash: false,
            });
        });
    }

    /* slick slider
     * ------------------------------------------------------ */
    var clSlickSlider = function () {

        var $gallery = $('.slider__slides').slick({
            arrows: false,
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            pauseOnFocus: false,
            fade: true,
            cssEase: 'linear'
        });

        $('.slider__slide').on('click', function () {
            $gallery.slick('slickGoTo', parseInt($gallery.slick('slickCurrentSlide')) + 1);
        });

    };


    /* Smooth Scrolling
     * ------------------------------------------------------ */
    var clSmoothScroll = function () {

        $('.smoothscroll').on('click', function (e) {
            var target = this.hash,
                $target = $(target);

            e.preventDefault();
            e.stopPropagation();

            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, cfg.scrollDuration, 'swing').promise().done(function () {

                // check if menu is open
                if ($('body').hasClass('menu-is-open')) {
                    $('.header-menu-toggle').trigger('click');
                }

                window.location.hash = target;
            });
        });

    };


    /* Placeholder Plugin Settings
     * ------------------------------------------------------ */
    var clPlaceholder = function () {
        $('input, textarea, select').placeholder();
    };


    /* Alert Boxes
     * ------------------------------------------------------ */
    var clAlertBoxes = function () {

        $('.alert-box').on('click', '.alert-box__close', function () {
            $(this).parent().fadeOut(500);
        });

    };


    /* Animate On Scroll
     * ------------------------------------------------------ */
    var clAOS = function () {

        AOS.init({
            offset: -400,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 300,
            once: true,
            disable: 'mobile'
        });

    };

    // Instagram Feeds Slider
    if ($.fn.owlCarousel) {
        $('.instagram-feeds-area').owlCarousel({
            items: 7,
            margin: 0,
            loop: true,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 1000,
            responsive: {
                0: {
                    items: 3
                },
                768: {
                    items: 4
                },
                992: {
                    items: 5
                },
                1280: {
                    items: 7
                }
            }
        });
    }

    // Home - Unsplash Feeds Slider
    if ($.fn.owlCarousel) {
        $('.image-feeds-area').owlCarousel({
            items: 7,
            margin: 0,
            loop: true,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 1000,
            responsive: {
                0: {
                    items: 3
                },
                768: {
                    items: 4
                },
                992: {
                    items: 5
                },
                1280: {
                    items: 7
                }
            }
        });
    }


    // Home Page Writings Slider
    if ($.fn.owlCarousel) {
        $('.s-writings .owl-carousel').owlCarousel({
            items: 1,
            loop: true,
            margin: 10,
            autoplay: true,
            autoplayHoverPause: true,
            autoplayTimeout: 8000,
            smartSpeed: 1000
        });
    }

    // Home Page Studio Slider
    if ($.fn.owlCarousel) {
        $('.s-studio .owl-carousel').owlCarousel({
            items: 1,
            loop: true,
            margin: 10,
            autoplay: true,
            autoplayHoverPause: true,
            autoplayTimeout: 6000,
            smartSpeed: 1000
        });
    }
    // Home Page Feed Slider
    if ($.fn.owlCarousel) {
        $('.s-feed .owl-carousel').owlCarousel({
            items: 1,
            loop: true,
            margin: 10,
            autoplay: true,
            autoplayHoverPause: true,
            autoplayTimeout: 12000,
            smartSpeed: 1000
        });
    }

    // Home Page Social Slider
    if ($.fn.owlCarousel) {
        $('.s-social .owl-carousel').owlCarousel({
            items: 1,
            loop: true,
            margin: 10,
            autoplay: true,
            autoplayHoverPause: true,
            autoplayTimeout: 10000,
            smartSpeed: 1000
        });
    }

    /* Studio Slide Focus Animations (3rd One is Active by Default)
     * ------------------------------------------------------ */
    var clStudioSlideFocus = function () {
        var slideItemHoverAction = $(".slide-gallery-wrap .slide-item")

        slideItemHoverAction.hover(
            function(){
                $(".slide-item:nth-child(3)").removeClass("slide-active");
            }
        );

        $(".slide-gallery-wrap").on("mouseleave", function() {
            $(".slide-item:nth-child(3)").addClass("slide-active");
        });
    };

    /* Confirm Popup
     * ------------------------------------------------------ */
    var clConfirmAction = function () {
        var confirmAction = $(".buttons .btn--red")

        confirmAction.click(function () {
            event.preventDefault();
            event.stopPropagation();
            $('.confirm-pop').show('');
        });

        $('.confirm-pop .confirm-action .btn--red').click(function () {
            $('.confirm-pop').hide('');
        })

        $('.confirm-pop .confirm-action .btn--primary').click(function () {
            $('.confirm-pop').hide('');
            $('.compose-article-wrapper').hide('slow');
            $('.filepond-container').hide('slow');
            // window.location.href = "/writings/";
        })

    };

    /* Compose Post
     * ------------------------------------------------------ */
    var clComposePost = function () {
        var clComposePost = $(".compose-post")

        clComposePost.click(function () {
            event.preventDefault();
            event.stopPropagation();
            if (window.location.href.indexOf("/writings/#add-article") != -1) {
                $('.compose-article-wrapper').show('');
                $('html, body').scrollTop($('.compose-article-wrapper').offset().top)
            } else if (window.location.pathname == '/writings/') {
                window.location = "/writings/#add-article"
                $('.compose-article-wrapper').show('');
                $('html, body').scrollTop($('.compose-article-wrapper').offset().top)
            } else {
                window.location = "/writings/#add-article"
            }
        });

        $('.confirm-pop .confirm-action .btn--red').click(function () {
            $('.confirm-pop').hide('');
        })
    };

    /* Add Snap
     * ------------------------------------------------------ */
    var clAddSnap = function () {
        var clAddSnap = $(".add-snap")

        clAddSnap.click(function () {
            event.preventDefault();
            event.stopPropagation();
            if (window.location.href.indexOf("/studio/#add-snap") != -1) {
                $('.filepond-container').show('');
                $('html, body').scrollTop($('.filepond-container').offset().top)
            } else if (window.location.pathname == '/studio/') {
                window.location = "/studio/#add-snap"
                $('.filepond-container').show('');
                $('html, body').scrollTop($('.filepond-container').offset().top)
            } else {
                window.location = "/studio/#add-snap"
            }
        });

        $('.confirm-pop .confirm-action .btn--red').click(function () {
            $('.confirm-pop').hide('');
        })
    };

    /* Add Snap
     * ------------------------------------------------------ */
    var clChooseCategory = function () {
        var chooseCategory = $(".choose-category")

        chooseCategory.click(function () {
            event.preventDefault();
            event.stopPropagation();
            $('.categories-pop').show('');
        });

        $('.categories-pop .confirm-action .btn--red').click(function () {
            $('.categories-pop').hide('');
        })

    };


    /* Sign In Popup
     * ------------------------------------------------------ */
    var clAccountPop = function () {
        var accountPop = $(".signup-trigger")

        accountPop.click(function () {
            event.preventDefault();
            event.stopPropagation();
            $('.account-popup-content').show('');
        });

        $('.account-popup-content .logmod__close').click(function () {
            $('.account-popup-content').hide('');
        })
    };

    // Sign Up - Login Forms JS
    var loginModalController = {
        tabsElementName: ".logmod__tabs li",
        tabElementName: ".logmod__tab",
        inputElementsName: ".logmod__form .input",
        hidePasswordName: ".hide-password",

        inputElements: null,
        tabsElement: null,
        tabElement: null,
        hidePassword: null,

        activeTab: null,
        tabSelection: 0, // 0 - first, 1 - second

        findElements: function () {
            var base = this;

            base.tabsElement = $(base.tabsElementName);
            base.tabElement = $(base.tabElementName);
            base.inputElements = $(base.inputElementsName);
            base.hidePassword = $(base.hidePasswordName);

            return base;
        },

        setState: function (state) {
            var base = this,
                elem = null;

            if (!state) {
                state = 0;
            }

            if (base.tabsElement) {
                elem = $(base.tabsElement[state]);
                elem.addClass("current");
                $("." + elem.attr("data-tabtar")).addClass("show");
            }

            return base;
        },

        getActiveTab: function () {
            var base = this;

            base.tabsElement.each(function (i, el) {
                if ($(el).hasClass("current")) {
                    base.activeTab = $(el);
                }
            });

            return base;
        },

        addClickEvents: function () {
            var base = this;

            base.hidePassword.on("click", function (e) {
                var $this = $(this),
                    $pwInput = $this.prev("input");

                if ($pwInput.attr("type") == "password") {
                    $pwInput.attr("type", "text");
                    $this.text("Hide");
                } else {
                    $pwInput.attr("type", "password");
                    $this.text("Show");
                }
            });

            base.tabsElement.on("click", function (e) {
                var targetTab = $(this).attr("data-tabtar");

                e.preventDefault();
                base.activeTab.removeClass("current");
                base.activeTab = $(this);
                base.activeTab.addClass("current");

                base.tabElement.each(function (i, el) {
                    el = $(el);
                    el.removeClass("show");
                    if (el.hasClass(targetTab)) {
                        el.addClass("show");
                    }
                });
            });

            base.inputElements.find("label").on("click", function (e) {
                var $this = $(this),
                    $input = $this.next("input");

                $input.focus();
            });

            return base;
        },

        initialize: function () {
            var base = this;

            base.findElements().setState().getActiveTab().addClickEvents();
        }
    };

    /* Back to Top
     * ------------------------------------------------------ */
    var clBackToTop = function () {

        var pxShow = 500,
            goTopButton = $(".go-top")

        // Show or hide the button
        if ($(window).scrollTop() >= pxShow) goTopButton.addClass('link-is-visible');

        $(window).on('scroll', function () {
            if ($(window).scrollTop() >= pxShow) {
                if (!goTopButton.hasClass('link-is-visible')) goTopButton.addClass('link-is-visible')
            } else {
                goTopButton.removeClass('link-is-visible')
            }
        });
    };

    /* Darkmode Toggle
     * ------------------------------------------------------ */
    var clDarkModeToggle = function () {

        var pxShow = 500,
            toggleDarkMode = $(".dark-mode-toggle")

        // Show or hide the button
        if ($(window).scrollTop() >= pxShow) toggleDarkMode.addClass('show-toggle');

        $(window).on('scroll', function (event) {
            // event.preventDefault();
            // event.stopPropagation();
            // event.stopImmediatePropagation();
            if (localStorage.getItem('vMode') === 'dark') {
                toggleDarkMode.removeClass('mode-light')
                toggleDarkMode.addClass('mode-dark')
            }
            if ($(window).scrollTop() >= pxShow) {
                if (!toggleDarkMode.hasClass('show-toggle')) toggleDarkMode.addClass('show-toggle')
            } else {
                toggleDarkMode.removeClass('show-toggle')
            }
        });

        // Toggle DarkMode and preserve state, light by default
        $(".dark-mode-toggle").on('click', function (event) {
            event.preventDefault();
            event.stopPropagation();
            event.stopImmediatePropagation();
            if (toggleDarkMode.hasClass('mode-light')) {
                toggleDarkMode.removeClass('mode-light')
                toggleDarkMode.addClass('mode-dark')
                DarkReader.setFetchMethod(window.fetch);
                DarkReader.enable({
                    brightness: 100,
                    contrast: 100,
                    sepia: 0
                });
                localStorage.setItem('vMode', 'dark');
            } else if (toggleDarkMode.hasClass('mode-dark')) {
                toggleDarkMode.removeClass('mode-dark')
                toggleDarkMode.addClass('mode-light')
                DarkReader.disable();
                localStorage.setItem('vMode', 'light');
            } else {
                toggleDarkMode.addClass('mode-light')
                localStorage.setItem('vMode', 'light');
            }
        });

        // Set theme based on previous setting, light by default
        $("document").ready(function (event) {
            if (localStorage.getItem('vMode') === 'dark') {
                DarkReader.setFetchMethod(window.fetch);
                DarkReader.enable({
                    brightness: 100,
                    contrast: 100,
                    sepia: 0
                });
            } else {
                toggleDarkMode.addClass('mode-light')
                DarkReader.disable();
            }
        })

    };


    /* Map
     * ------------------------------------------------------ */

    // add custom buttons for the zoom-in/zoom-out on the map
    var clCustomZoomControl = function (controlDiv, map) {

        // grap the zoom elements from the DOM and insert them in the map 
        var controlUIzoomIn = document.getElementById('map-zoom-in'),
            controlUIzoomOut = document.getElementById('map-zoom-out');

        controlDiv.appendChild(controlUIzoomIn);
        controlDiv.appendChild(controlUIzoomOut);

        // Setup the click event listeners and zoom-in or out according to the clicked element
        google.maps.event.addDomListener(controlUIzoomIn, 'click', function () {
            map.setZoom(map.getZoom() + 1)
        });
        google.maps.event.addDomListener(controlUIzoomOut, 'click', function () {
            map.setZoom(map.getZoom() - 1)
        });

    };

    var clGoogleMap = function () {

        if (typeof google === 'object' && typeof google.maps === 'object') {

            // 37.422424, -122.085661

            var latitude = 37.422424,
                longitude = -122.085661,
                map_zoom = 14,
                main_color = '#0054a5',
                saturation_value = -30,
                brightness_value = 5,
                marker_url = null,
                winWidth = $(window).width();

            // show controls
            $("#map-zoom-in, #map-zoom-out").show();

            // marker url
            if (winWidth > 480) {
                marker_url = 'media/images/icon-location@2x.png';
            } else {
                marker_url = 'media/images/icon-location.png';
            }

            // map style
            var style = [{
                    // set saturation for the labels on the map
                    elementType: "labels",
                    stylers: [{
                        saturation: saturation_value
                    }]
                },
                { // poi stands for point of interest - don't show these lables on the map 
                    featureType: "poi",
                    elementType: "labels",
                    stylers: [{
                        visibility: "off"
                    }]
                },
                {
                    // don't show highways lables on the map
                    featureType: 'road.highway',
                    elementType: 'labels',
                    stylers: [{
                        visibility: "off"
                    }]
                },
                {
                    // don't show local road lables on the map
                    featureType: "road.local",
                    elementType: "labels.icon",
                    stylers: [{
                        visibility: "off"
                    }]
                },
                {
                    // don't show arterial road lables on the map
                    featureType: "road.arterial",
                    elementType: "labels.icon",
                    stylers: [{
                        visibility: "off"
                    }]
                },
                {
                    // don't show road lables on the map
                    featureType: "road",
                    elementType: "geometry.stroke",
                    stylers: [{
                        visibility: "off"
                    }]
                },
                // style different elements on the map
                {
                    featureType: "transit",
                    elementType: "geometry.fill",
                    stylers: [{
                            hue: main_color
                        },
                        {
                            visibility: "on"
                        },
                        {
                            lightness: brightness_value
                        },
                        {
                            saturation: saturation_value
                        }
                    ]
                },
                {
                    featureType: "poi",
                    elementType: "geometry.fill",
                    stylers: [{
                            hue: main_color
                        },
                        {
                            visibility: "on"
                        },
                        {
                            lightness: brightness_value
                        },
                        {
                            saturation: saturation_value
                        }
                    ]
                },
                {
                    featureType: "poi.government",
                    elementType: "geometry.fill",
                    stylers: [{
                            hue: main_color
                        },
                        {
                            visibility: "on"
                        },
                        {
                            lightness: brightness_value
                        },
                        {
                            saturation: saturation_value
                        }
                    ]
                },
                {
                    featureType: "poi.sport_complex",
                    elementType: "geometry.fill",
                    stylers: [{
                            hue: main_color
                        },
                        {
                            visibility: "on"
                        },
                        {
                            lightness: brightness_value
                        },
                        {
                            saturation: saturation_value
                        }
                    ]
                },
                {
                    featureType: "poi.attraction",
                    elementType: "geometry.fill",
                    stylers: [{
                            hue: main_color
                        },
                        {
                            visibility: "on"
                        },
                        {
                            lightness: brightness_value
                        },
                        {
                            saturation: saturation_value
                        }
                    ]
                },
                {
                    featureType: "poi.business",
                    elementType: "geometry.fill",
                    stylers: [{
                            hue: main_color
                        },
                        {
                            visibility: "on"
                        },
                        {
                            lightness: brightness_value
                        },
                        {
                            saturation: saturation_value
                        }
                    ]
                },
                {
                    featureType: "transit",
                    elementType: "geometry.fill",
                    stylers: [{
                            hue: main_color
                        },
                        {
                            visibility: "on"
                        },
                        {
                            lightness: brightness_value
                        },
                        {
                            saturation: saturation_value
                        }
                    ]
                },
                {
                    featureType: "transit.station",
                    elementType: "geometry.fill",
                    stylers: [{
                            hue: main_color
                        },
                        {
                            visibility: "on"
                        },
                        {
                            lightness: brightness_value
                        },
                        {
                            saturation: saturation_value
                        }
                    ]
                },
                {
                    featureType: "landscape",
                    stylers: [{
                            hue: main_color
                        },
                        {
                            visibility: "on"
                        },
                        {
                            lightness: brightness_value
                        },
                        {
                            saturation: saturation_value
                        }
                    ]

                },
                {
                    featureType: "road",
                    elementType: "geometry.fill",
                    stylers: [{
                            hue: main_color
                        },
                        {
                            visibility: "on"
                        },
                        {
                            lightness: brightness_value
                        },
                        {
                            saturation: saturation_value
                        }
                    ]
                },
                {
                    featureType: "road.highway",
                    elementType: "geometry.fill",
                    stylers: [{
                            hue: main_color
                        },
                        {
                            visibility: "on"
                        },
                        {
                            lightness: brightness_value
                        },
                        {
                            saturation: saturation_value
                        }
                    ]
                },
                {
                    featureType: "water",
                    elementType: "geometry",
                    stylers: [{
                            hue: main_color
                        },
                        {
                            visibility: "on"
                        },
                        {
                            lightness: brightness_value
                        },
                        {
                            saturation: saturation_value
                        }
                    ]
                }
            ];

            // map options
            var map_options = {

                center: new google.maps.LatLng(latitude, longitude),
                zoom: 14,
                panControl: false,
                zoomControl: false,
                mapTypeControl: false,
                streetViewControl: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                scrollwheel: false,
                styles: style

            };

            // inizialize the map
            var map = new google.maps.Map(document.getElementById('map-container'), map_options);

            // add a custom marker to the map				
            var marker = new google.maps.Marker({

                position: new google.maps.LatLng(latitude, longitude),
                map: map,
                visible: true,
                icon: marker_url

            });

            var zoomControlDiv = document.createElement('div');
            var zoomControl = new clCustomZoomControl(zoomControlDiv, map);

            // insert the zoom div on the top right of the map
            map.controls[google.maps.ControlPosition.TOP_RIGHT].push(zoomControlDiv);

        }

    };


    /* Initialize
     * ------------------------------------------------------ */
    (function ssInit() {

        clPreloader();
        clMediaElement();
        clPrettyPrint();
        clSearch();
        clMobileMenu();
        clMasonryFolio();
        clSlickSlider();
        clSmoothScroll();
        clPlaceholder();
        clAlertBoxes();
        clAOS();
        clBackToTop();
        clDarkModeToggle();
        // clGoogleMap();
        clConfirmAction();
        loginModalController.initialize();
        clAccountPop();
        clComposePost();
        clHighlightActive();
        clAddSnap();
        clChooseCategory();
        clLightGallery();
        clStudioSlideFocus();
    })();

})(jQuery);