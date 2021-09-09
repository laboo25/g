$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    dots: false,
    autoplay:true,
    autoplayTimeout: 3500,
    autoplaySpeed: 3000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
});


$(".card").click(function(){
    $(".details").hide();
  });
  
  $(".card").click(function(){
    $(".details").show();
  });

});