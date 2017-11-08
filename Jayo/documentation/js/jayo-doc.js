jQuery(document).ready(function($) {

    $("#nav ul li a[href^='#']").on('click', function(e) {

       // prevent default anchor click behavior
       e.preventDefault();

       // animate
       $('html, body').animate({
           scrollTop: $(this.hash).offset().top
         }, 300, function(){
   
           // when done, add hash to url
           // (default click behaviour)
           window.location.hash = this.hash;
         });

    });

    $(function() {
        var menu = $('.sidebar');
        var hieghtThreshold = $(".content").offset().top;
        var hieghtThreshold_end  = $(".content").offset().top +$(".content").height() ;
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();

            if (scroll >= hieghtThreshold && scroll <=  hieghtThreshold_end ) {
                menu.addClass('sticky');
            } else {
                menu.removeClass('sticky');
            }
        });
    })

    $("#main-menu").scrollspy();

});