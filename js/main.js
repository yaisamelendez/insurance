;(function () {

    'use strict';

    var carousels = function() {
        $(".owl-carousel1").owlCarousel(
            {
                loop:true,
                center: true,
                margin:0,
                responsiveClass:true,
                nav:false,
                responsive:{
                    0:{
                        items:1,
                        nav:false
                    },
                    600:{
                        items:1,
                        nav:false
                    },
                    1000:{
                        items:3,
                        nav:true,
                        loop:false
                    }
                }
            }
        );

        $(".owl-carousel2").owlCarousel(
            {
                loop:true,
                center: false,
                margin:0,
                responsiveClass:true,
                nav:true,
                responsive:{
                    0:{
                        items:1,
                        nav:false
                    },
                    600:{
                        items:2,
                        nav:false
                    },
                    1000:{
                        items:3,
                        nav:true,
                        loop:true
                    }
                }
            }
        );
    }


    // svg responsive in mobile mode
    var checkPosition = function() {
        if ($(window).width() < 767) {
            $("#bg-services").attr("viewBox", "0 0 1050 800");

        }
    };

    (function($) {
        carousels();
        checkPosition();
    })(jQuery);


}());

// menu toggle button
function myFunction(x) {
    x.classList.toggle("change");
}

function sendMail(x) {

    let testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
    $("#contact .nameError").empty();
    $("#contact .subjectError").empty();
    $("#contact .messageError").empty();

    let name = $("#contact .name").val();
    let subject = $("#contact .subject").val();
    let message = $("#contact .message").val();
    if(!name){
        $("#contact .nameError").append("Por favor, escriba su nombre.");
    } else if(!subject){
        $("#contact .subjectError").append("Por favor, escriba su asunto.");
    }else if(!message){
        $("#contact .messageError").append("Por favor, escriba su mensaje.");
    }else{
        window.open(`mailto:yaisamhealth@gmail.com?subject=${subject}-${name}&body=${message}`);
    }
}
