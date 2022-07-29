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
<<<<<<< HEAD
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

=======
>>>>>>> 99ddab54ed7744b2e89f156c937421e30dae9ab4
jQuery(document).ready(function(){
    jQuery('.custom-navbar-toggle').click(function(){
        jQuery(this).toggleClass('toggle-wrap')
    })
});
