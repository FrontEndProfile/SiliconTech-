$(document).ready(function(){
  var one = $("#one");
  var two = $("#two");
  one.owlCarousel({
  loop:true,
  margin:10,
  nav: true,
  dots:false,
  items:1,
  responsive:{
    0:{
        items:1
    },
    600:{
        items:1
    },
    800:{
        items:2
    },
    1300:{
        items:3
    },
    1400:{
        items:4
    },
  
  },
});

two.owlCarousel({
    loop:true,
  margin:0,
  nav:false,
  dots:false,
  responsive:{
    0:{
        items:1
    },
    600:{
        items:1
    },
    800:{
        items:2
    },
    1000:{
        items:2
    },
  
  }
  });


});
