$(document).ready(function() {
    $(window).load(function() {
        $("#slider").nivoSlider();
    });
});

$(document).ready(function() {
    if ($(window).width() >= 768) {
        $(".product-future").slick({
            slidesToShow: 4,
            dots: false,
            arrows: false,
            slidesToScroll: 1,
            autoplay: true,
            loop: true,
            autoplaySpeed: 2000,
            
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        });
    }

    $('.project-slider').lightSlider({
        item: 4,
        loop: true,
        auto: true,
        slideMove: 1,
        easing: "cubic-bezier(0.25, 0, 0.25, 1)",
        speed: 800,
        pager: false,
        responsive: [{
                breakpoint: 800,
                settings: {
                    item: 3,
                    slideMove: 1,
                    slideMargin: 6
                }
            },
            {
                breakpoint: 480,
                settings: {
                    item: 2,
                    slideMove: 1
                }
            }
        ]
    });


    $(".partner").lightSlider({
        item: 7,
        loop: true,
        auto: true,
        slideMove: 1,
        easing: "cubic-bezier(0.25, 0, 0.25, 1)",
        speed: 600,
        pager: false,
        responsive: [{
                breakpoint: 800,
                settings: {
                    item: 5,
                    slideMove: 1,
                    slideMargin: 6
                }
            },
            {
                breakpoint: 480,
                settings: {
                    item: 3,
                    slideMove: 1
                }
            }
        ]
    });
});

$(document).ready(function() {
    $(".vertical-slider").lightSlider({
        item: 2,
        loop: true,
        auto: true,
        vertical: true,
        verticalHeight: 650,
        slideMove: 1,
        easing: "cubic-bezier(0.25, 0, 0.25, 1)",
        speed: 600,
        pager: false
    });
});
$(document).ready(function() {
    $("[data-toggle=offcanvas]").click(function() {
        $(".row-offcanvas").toggleClass("active");
    });
});

$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $(".scrollup").fadeIn();
        } else {
            $(".scrollup").fadeOut();
        }
    });

    $(".scrollup").click(function() {
        $("html, body").animate({
                scrollTop: 0
            },
            600
        );
        return false;
    });
});