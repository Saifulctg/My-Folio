$(function () {
    'use strict'

    // Sticky Menu Code Start
    var headerOffset = $('#header').offset().top

    $(window).on('scroll', function () {
        var scrollSize = $(window).scrollTop()

        if (scrollSize > headerOffset) {
            $('#header').addClass('headerFixed')
        } else {
            $('#header').removeClass('headerFixed')
        }
    })

    // Sticky Menu Code End

    // Banner Slide Code Start
    $('.bannerSlide').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        speed: 1000,
        dots: true,
        dotsClass: 'bannerDots',
    });
    // Banner Slide Code End

    // ==========Back To Top button code start==========

    $(window).on('scroll', function () {
        var scrollSize = $(window).scrollTop()

        if (scrollSize > 800) {
            $('.backToTop').fadeIn(500)
        } else {
            $('.backToTop').fadeOut(500)
        }
    })
    $('.backToTop').on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        }, '1000');
    })
})