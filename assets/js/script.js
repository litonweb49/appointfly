$(document).ready(function(){
    $('.menu-icon').click(function(){
        $('.menu-items').slideToggle();
    });

    // apps carousel
    $('.apps-carousel').owlCarousel({
        loop:true,
        nav:true,
        dots:false,
        navText:['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
        responsive : {
            
            0 : {
                items:1,
            },
            
            480 : {
                items:2,
            },
            
            768 : {
                items:4,
            }
        }
    });
});