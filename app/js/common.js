//mobile menu
$(document).ready(function(){
    if($(window).width()<=800) {
        $(".navbar").hide();
        $(".hamburger").on("click touch", function(){
            $(".navbar").slideToggle();
        });
    }
});

//search input
$('.search-btn').on('click', function(){
	$('.search-form').toggle();
})

//slick slider
$('.single-item').slick({
	dots: true,
	arrows: false
}); 

$('.multiple-items').slick({
	slidesToShow: 8,
  slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 1366,
      settings: {
        slidesToShow: 5
      }
    },
    {
      breakpoint: 801,
      settings: {
      	slidesToShow: 3
      }
    },
    {
      breakpoint: 481,
      settings: {
      	slidesToShow: 2
      }
    },
    {
      breakpoint: 376,
      settings: {
      	slidesToShow: 1
      }
    }
  ]
});