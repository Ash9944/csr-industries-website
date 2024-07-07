"use strict";


/* ===================================
        Loading Timeout
 ====================================== */

$(window).on('load', function () {
    $('.side-menu').removeClass('hidden');
    // Animate loader off screen
    $("#loader-fade").fadeOut(800);
});

var $window = $(window);
var windowsize = $(window).width();

/*------ Menu Fixed ------*/

if ($("nav.navbar").hasClass("static-nav")) {
    $window.scroll(function () {
        var $scroll = $window.scrollTop();
        var $navbar = $(".static-nav");
        if ($scroll > 200) {
            $navbar.addClass("fixedmenu");
        } else {
            $navbar.removeClass("fixedmenu");
        }
    });
}

/*------ Bottom Menu Fix ------*/

if ($("nav.navbar").hasClass("fixed-bottom")) {
    var navHeight = $(".fixed-bottom").offset().top;
    $window.scroll(function () {
        if ($window.scrollTop() > navHeight) {
            $('.fixed-bottom').addClass('fixedmenu');
        } else {
            $('.fixed-bottom').removeClass('fixedmenu');
        }
    });
}

/*===================================
    Go Top Scroll
====================================== */

$(function () {
    // Scroll Event
    $(window).on('scroll', function () {
        var scrolled = $(window).scrollTop();
        if (scrolled > 600) $('.go-top').addClass('active');
        if (scrolled < 600) $('.go-top').removeClass('active');
    });
    // Click Event
    $('.go-top').on('click', function () {
        $("html, body").animate({ scrollTop: "0" }, 500);
    });
});

/* Hide Menu on Mobile Click */

$(".navbar-nav>li>a").on("click", function () {
    $(".navbar-collapse").collapse("hide");
});

// scroll section
$(".scroll").on("click", function (event) {
    event.preventDefault();
    $("html,body").animate({
        scrollTop: $(this.hash).offset().top - 70
    }, 1200);
});

/* ===================================
    Side Menu
====================================== */
if ($("#sidemenu_toggle").length) {
    $("#sidemenu_toggle").on("click", function () {
        $(".pushwrap").toggleClass("active");
        $(".side-menu").addClass("side-menu-active"), $("#close_side_menu").fadeIn(700)
    }), $("#close_side_menu").on("click", function () {
        $(".side-menu").removeClass("side-menu-active"), $(this).fadeOut(200), $(".pushwrap").removeClass("active")
    }), $(".side-nav .navbar-nav .nav-link").on("click", function () {
        $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active")
    }), $("#btn_sideNavClose").on("click", function () {
        $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active")
    });
}

if ($(".just-sidemenu").length) {
    var anchor_point = $(".rotating-words").height();
    var side_toggle = $(".just-sidemenu #sidemenu_toggle");
    side_toggle.addClass("toggle_white");
    $window.on("scroll", function () {
        if ($window.scrollTop() >= anchor_point) {
            side_toggle.removeClass("toggle_white");
        } else {
            side_toggle.addClass("toggle_white");
        }
    });
}

/* ===================================
    WOW JS
====================================== */

new WOW().init();

/* ===================================
     Products Carousel
====================================== */

$(".owl-products").owlCarousel({
    items: 5,
    dots: false,
    nav: false,
    loop: true,
    center: true,
    autoplay: true,
    autoplayHoverPause: true,
    slideSpeed: 3000,
    paginationSpeed: 5000,
    smartSpeed: 1000,
    responsive: {
        992: {
            items: 3
        },
        600: {
            items: 3
        },
        320: {
            items: 1
        },
        280: {
            items: 1
        }
    }
});

var owl = $('.owl-products');
owl.owlCarousel();
$('#team-circle-left').click(function () {
    owl.trigger('prev.owl.carousel');
});

$('#team-circle-right').click(function () {
    owl.trigger('next.owl.carousel');
});

/* ===================================
     Review Carousel
====================================== */

$('#testimonial-carousal').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: false,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});

/* ===================================
     Counter
====================================== */

$('.count').each(function () {
    $(this).appear(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 3000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
});

/* ===================================
     Modal Windows
====================================== */

function morphic_window(x) {
    openmodal(x);
}

function openmodal(x) {
    setTimeout(function () { $('#' + x).addClass("modal-view").fadeIn(800); }, 50);
    setTimeout(function () { $('body').addClass('show-modal').fadeIn(800); }, 50);
}

$('#data-modal').on('click', '.close-modal', function () {
    $(".modal-window").removeClass("modal-view");
    $('body').removeClass('show-modal');
    $('.body').removeClass('body-overlay');
});

$('#data-modal').on('click', '.modal-window', function (event) {
    var i = event.target.id;
    var x = event.target.className;
    var v = x.split(" ");
    var c = v[0];
    if (c == "modal-window") {
        $(".modal-window").removeClass("modal-view");
        $('.body').removeClass('body-overlay');
        $('body').removeClass('show-modal');
    }
    else {
    }
});

//Prev_window
function prev_window(x) {
    $('.body').addClass('body-overlay');
    $(".modal-window").removeClass("modal-view");
    $(".loader").addClass('load');
    setTimeout(function () {
        $(".loader").fadeOut(800);
    }, 1000);
    setTimeout(function () { $("#" + x).addClass("modal-view").fadeIn(800); }, 800);
    setTimeout(function () { $(".loader").removeClass('load'); }, 800);
}

//Next_window
function next_window(x) {
    $('.body').addClass('body-overlay');
    $(".modal-window").removeClass("modal-view");
    $(".loader").addClass('load');
    setTimeout(function () {
        $(".loader").fadeOut(800);
    }, 1000);
    setTimeout(function () { $("#" + x).addClass("modal-view").fadeIn(800); }, 800);
    setTimeout(function () { $(".loader").removeClass('load'); }, 800);
}

/*===================================
         Number input counter
 ======================================*/
$(document).ready(function () {
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

    $('.size__item>a').css('opacity', '0.4');
    $('.size__item>a').on('click', function () {
        $('.size__item>a').css('opacity', '0.4');
        $(this).css('opacity', '1');
    });
});

function move() {
    $(".faq .slide ul").animate({
        top: "-=200px"
    }, function () {
        $(".faq .slide ul li:first").appendTo('.faq .slide ul');
        $(".faq .slide ul").css("top", "");
    });
}

function lmove() {
    $(".faq .slide ul").animate({
        bottom: "-=200px"
    }, function () {
        $(".faq .slide ul li:last").appendTo('.faq .slide ul');
        $(".faq .slide ul").css("bottom", "");
    });
}

const slide = document.querySelector('.faq .slide');
const slideItems = document.querySelectorAll('.faq .slide li');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let currentIndex = 0;

function updateSlide() {
    const slideWidth = slideItems[0].clientWidth;
    slide.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

nextButton.addEventListener('click', () => {
    move();
});

prevButton.addEventListener('click', () => {
    lmove();
});

window.addEventListener('resize', updateSlide);

setInterval(function () { move(); }, 15000);