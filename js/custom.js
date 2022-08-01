// JavaScript Document
jQuery('#custom-owl').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
jQuery('#custom-feature-owl').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:5
        }
    }
});

jQuery(document).ready(function(){
    jQuery('.custom-navbar-toggle').click(function(){
        jQuery(this).toggleClass('toggle-wrap')
    })
    jQuery('.custom-carousel-indicator li::marker').attr("--banner-no",'01')
});

let y   = 10;
document.documentElement.style.setProperty('--banner-no', y )